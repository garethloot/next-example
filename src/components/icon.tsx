import React, { ReactNode } from "react";

type IconProps = {
  icon: string;
};

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <span className="material-symbols-outlined bg-inherit p-0">{icon}</span>
  );
};

export default Icon;
