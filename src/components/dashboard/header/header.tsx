import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "../../shared/themeToggle";


export default function Header() {
  return (
    <div className='w-full z-20 md:left-75 left-0 top-0 p-4 bg-background/80 backdrop-blur-md flex gap-4 items-center border-b'>
        <div className="flex items-center gap-2 ml-auto ">
            <UserButton afterSignOutUrl="/" />
            <ThemeToggle />
        </div>
        </div>
  )
}
