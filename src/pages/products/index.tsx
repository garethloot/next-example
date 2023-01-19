import React, { ReactNode } from "react";
import Products from "src/components/products";
import PageContainer from "@/components/page_container";
import PageHeader from "@/components/page_header";
import { ProductOverviewProps } from "@/types/pages/products_overview";
import BreadCrump from "@/components/breadcrump";

const ProductOverview: React.FC<ProductOverviewProps> = ({ data }) => {
  return (
    <PageContainer>
      <PageHeader title="Products">
        <BreadCrump
          paths={[{ title: "Home", href: "/" }, { title: "Products" }]}
        />
      </PageHeader>
      <Products products={data.products} />
    </PageContainer>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  return { props: { data } };
};

export default ProductOverview;
