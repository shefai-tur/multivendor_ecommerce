
import ThemeToggle from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" p-5"> 
    <div className="w-full flex justify-end ">
      <ThemeToggle/>
    </div>
    <h1 className="text-blue-500 font-barlow">Shefaitur rahman</h1>
   

    <Button variant="destructive">Primary Button</Button>
   
    
   </div>
  );
}
