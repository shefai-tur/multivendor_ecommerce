import Header from "@/src/components/dashboard/header/header";
import Sidebar from "@/src/components/dashboard/sidebar/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  //block non  admins from accessing the admin dashboard
  const user = await  currentUser();
  if(!user || user.privateMetadata.role !=="ADMIN") redirect("/");

  return(
    <div className="w-full h-full">
      <div className="ml-75 ">
        {/* Header */}
        <Header  />
        <Sidebar/>
        <div className="w-full mt-18.75 p-4">{children}</div>
      </div>
    </div>
  
);
}
