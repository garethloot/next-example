import { PageHeaderProps } from "@/types/components/page_header";

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="hero bg-base-200 rounded-2xl">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle ? <p className="py-6">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
