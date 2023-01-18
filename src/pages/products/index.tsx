import React, { ReactNode } from "react";

type ProductOverviewProps = {
  children: ReactNode;
  data: [];
};

const ProductOverview: React.FC<ProductOverviewProps> = ({
  children,
  data,
}) => {
  return <div>{children}</div>;
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default ProductOverview;
