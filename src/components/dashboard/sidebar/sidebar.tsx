import { currentUser } from "@clerk/nextjs/server";
import Logo from "../../shared/logo";
import UserInfo from "./user_info";


interface SidebarProps {
  isAdmin?: boolean;

}

const Sidebar: React.FC<SidebarProps> = async ({ isAdmin }) => {
  const user = await currentUser();
  return (
    <div className="w-75 border-r h-screen flex flex-col fixed top-0 left-0 bottom-0"> 
    <Logo width="100%" height="100px" />
    <span className="mt-3"/>
    {
      user &&     <UserInfo user={user} />
    }

    </div>
  )
}

export default Sidebar;