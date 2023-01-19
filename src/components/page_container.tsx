import { hideCart } from "@/store/cart";
import { RootState } from "@/store/store";
import { PageContainerProps } from "@/types/components/page_container";
import { useDispatch, useSelector } from "react-redux";

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="xl:container xl:mx-auto space-y-4 p-4">{children}</div>
  );
};

export default PageContainer;
