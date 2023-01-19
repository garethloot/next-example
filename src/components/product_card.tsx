import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "@/types/components/product_card";
import { toPrice } from "@/helpers/to_price";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cart";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

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

  const price = toPrice(product.price, "nl-NL", "EUR");

  return (
    <Link href={`/products/${product.id}`}>
      <div className="card bg-base-100 shadow-xl grow">
        <figure className="relative h-64">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="truncate">{product.description}</p>
          <div className="card-actions justify-end">
            <p className="text-lg font-bold">{price}</p>
            <button onClick={buyNow} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
