import Image from "next/image";
import Link from "next/link";

const Logo = ({ whiteLogo = true }: { whiteLogo?: boolean }) => {
  return (
    <Link href={"/"}>
      <Image
        src={whiteLogo ? "/images/white-logo.png" : "/images/dark-logo.png"}
        alt="Logo"
        className="size-[50px]"
        width={500}
        height={300}
      />
    </Link>
  );
};

export default Logo;
