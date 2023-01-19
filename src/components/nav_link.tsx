import Link from "next/link";
import { useRouter } from "next/router";

export type NavLinkProps = {
  href: string;
  text: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={[
        router.pathname === href ? "btn-active" : "",
        "btn-ghost",
      ].join(" ")}
    >
      {text}
    </Link>
  );
};
