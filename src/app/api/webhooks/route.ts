export const runtime = "nodejs";
import { User } from "@/generated/prisma/client";
import { NextRequest } from "next/server";
import { db } from "@/src/lib/db";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

import { clerkClient } from "@clerk/nextjs/server";



export async function POST(req: NextRequest) {

  try {
  await db.$connect();
  console.log("✅ Database connected successfully");
} catch (error) {
  console.error("❌ Database connection failed:", error);
}

  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    
    // When a user is created or updated, upsert the user in the database
    if (evt.type === "user.created" || evt.type === "user.updated") {
      const data = evt.data;
      const userData = JSON.parse(JSON.stringify(data));

      const user: Partial<User> = {
        id: userData.id,
        name: `${userData.first_name} ${userData.last_name}`,
        email: userData.email_addresses[0].email_address,
        picture: userData.image_url,
      };

      if (!user) return new Response("User not found", { status: 404 });

      const dbUser = await db.user.upsert({
        where: {
          email: user.email,
        },
        update: user,
        create: {
          id: user.id!,
          name: user.name!,
          email: user.email!,
          picture: user.picture!,
          role: user.role || "USER",
        },
      });

      const clerk = await clerkClient();
      await clerk.users.updateUserMetadata(userData.id, {
        privateMetadata: {
          role: dbUser.role || "USER",
        },
      });
       return new Response("Updated privateMetadata role", { status: 200 });
    }
    //When a user is deleted, delete the user from the database
     if(evt.type === "user.deleted") {
      const userId = JSON.parse(JSON.stringify(evt.data)).id;
      await db.user.delete({
        where: {
          id: userId,
        },
      });
      return new Response("User deleted", { status: 200 });
    }
    
    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
