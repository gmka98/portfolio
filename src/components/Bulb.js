import Image from "next/image";
import bulb from "../../public/images/services/bulb.png";

const Bulb = () => {
    return( 
    <div alt="bulb" className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
        <Image 
        src={bulb}
        width={260}
        height={200}
        className="w-full h-full"
        />
    </div>
    )
}

export default Bulb;
