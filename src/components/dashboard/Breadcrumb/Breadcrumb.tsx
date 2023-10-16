import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex lg:flex-row gap-3 flex-row items-center justify-between">
      <h2 className="text-title-md2 mt-2 lg:mt-1 font-semibold text-gray-700 pl-1">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-1 pr-4">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-indigo-600">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
