import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaBehance, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaBehance />, path: "https://www.behance.net/jestemswiety/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/jestemswiety/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/jestemswiety/" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
