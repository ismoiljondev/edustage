import Image from "next/image";
import Link from "next/link";
import EduLogo from "@/public/icons/logo.png";
import EduLogoTwo from "@/public/icons/logo2.png";

type LogoProps = {
  logoOption: "optionHome" | "optionOrdinary";
};

function Logo(props: LogoProps) {
  const { logoOption } = props;

  return (
    <Link href={"/"}>
      {logoOption == "optionHome" ? (
        <Image src={EduLogo} alt="Logo" width={163} height={38} />
      ) : (
        <Image src={EduLogoTwo} alt="Logo" width={163} height={38} />
      )}
    </Link>
  );
}

export default Logo;
