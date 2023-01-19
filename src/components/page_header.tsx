import { PageHeaderProps } from "@/types/components/page_header";

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <div className="bg-base-200 rounded-2xl">
      <div className="">
        <div className="p-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
