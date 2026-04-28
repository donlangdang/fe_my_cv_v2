import Link from "next/link";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

const LinkSocialMedia = () => {
  return (
    <div className="flex items-center w-full md:1/3 justify-between">
      <Link
        href="https://www.facebook.com/share/19zGeq2UDB/"
        target="_blank"
        className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
      >
        <FacebookLogoIcon
          size={32}
          className="hover:text-purple-400 cursor-pointer"
        />
        Đôn Đinh
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
        target="_blank"
      >
        <InstagramLogoIcon
          size={32}
          className="hover:text-purple-400 cursor-pointer"
        />
        @bodon0211
      </Link>

      <Link
        className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
        href="#"
        target="_blank"
      >
        <InstagramLogoIcon
          size={32}
          className="hover:text-purple-400 cursor-pointer"
        />
        @bun_leather
      </Link>
      <Link
        className="flex items-center justify-center flex-col text-xs md:text-base hover:text-purple-400"
        href="#"
        target="_blank"
      >
        <GithubLogoIcon
          size={32}
          className="hover:text-purple-400 cursor-pointer"
        />
        donlangdang
      </Link>
    </div>
  );
};

export default LinkSocialMedia;
