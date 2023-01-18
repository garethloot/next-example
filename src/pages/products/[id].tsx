import React, { ReactNode } from "react";

type ProductDetailProps = {
  children: ReactNode;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ProductDetail;
