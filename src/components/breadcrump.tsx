import Link from "next/link";
import React, { ReactNode } from "react";

type Path = {
  href?: string;
  title: string;
};

type BreadCrumpProps = {
  paths: Path[];
};

const BreadCrump: React.FC<BreadCrumpProps> = ({ paths }) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {paths.map((path) => (
          <li key={path.href}>
            {path.href ? (
              <Link href={path.href}>{path.title}</Link>
            ) : (
              <p>{path.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrump;
