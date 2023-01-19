import { ProductDetailProps } from "@/types/pages/products_detail";
import PageContainer from "@/components/page_container";
import { GetServerSidePropsContext } from "next";
import { Product } from "@/types/model/product";
import ImageCarousel from "@/components/image_carousel";
import { toPrice } from "@/helpers/to_price";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cart";
import BreadCrump from "@/components/breadcrump";
import PageHeader from "@/components/page_header";

const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { product } = data;

  const price = toPrice(product.price, "nl-NL", "EUR");

  const buyNow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      addItem({
        item: {
          productId: product.id,
          price: product.price,
          quantity: 1,
          totalPrice: product.price * 1,
          productTitle: product.title,
          productThumnail: product.thumbnail,
        },
      })
    );
  };
  return (
    <PageContainer>
      <PageHeader title={product.title}>
        <BreadCrump
          paths={[
            { title: "Home", href: "/" },
            { title: "Products", href: "/products" },
            { title: product.title },
          ]}
        />
      </PageHeader>
      <div className="md:flex space-x-4">
        <div className="card bg-base-100 shadow-xl mb-10 flex-1">
          <div className="card-body">
            <h2 className="card-title">
              {product.title} <span className="badge">{product.brand}</span>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <p className="text-lg font-bold">{price}</p>
              <button onClick={buyNow} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ImageCarousel images={product.images} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductDetail;

export type ProductData = {
  product: Product;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as { id: string };
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data: ProductData = await res.json();

  return { props: { data: { product: data } } };
};
