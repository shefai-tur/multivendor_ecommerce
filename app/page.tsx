import ThemeToggle from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" p-5">
      <div className="w-full flex gap-x-5 justify-end ">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500 font-barlow">Home page</h1>
    </div>
  );
}
