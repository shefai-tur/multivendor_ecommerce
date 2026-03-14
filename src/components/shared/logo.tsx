import Image from "next/image";
import LogoImg from "../../../public/assets/icon/marzax.png";
interface LogoProps {
    width:string;
    height:string;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <div className="z-50" style={{ width, height }}>
        <Image src ={LogoImg} alt="marzax" className="w-full h-full object-cover overflow-visible" />
        </div>
    );
}
export default Logo;