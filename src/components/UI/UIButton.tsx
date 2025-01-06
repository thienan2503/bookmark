import { useMemo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface UIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "submit";
  loading?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
}
const UIButton = ({
  children,
  className,
  variant,
  onClick,
  loading = false,
  disabled = false,
  ...props
}: UIButtonProps) => {
  const variantCl = useMemo(() => {
    switch (variant) {
      case "primary":
        return "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6";
      case "secondary":
        return "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6";
      case "outline":
        return "inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6";
      case "submit":
        return "inline-flex justify-center min-w-[162px] items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
      default:
        return "inline-flex items-center justify-center bg-primary px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10";
    }
  }, [variant]);
  return (
    <button
      className={`${variantCl} ${className}`}
      onClick={onClick}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
export default UIButton;
