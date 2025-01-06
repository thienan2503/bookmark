"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

interface BreadcrumbProps {
  pageName: string;
  urlBack?: string;
}

const Breadcrumb = ({ pageName, urlBack }: BreadcrumbProps) => {
  const router = useRouter();
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="flex items-center text-title-md2 font-semibold text-black dark:text-white">
        <button
          className="mr-2"
          onClick={() => {
            if (urlBack) return router.push(urlBack || "/");
            router.back();
          }}
        >
          <FaArrowLeftLong />
        </button>
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
