import { FieldError } from "react-hook-form";

interface UIInputProps {
  label: string;
  type?: string;
  field: {
    [x: string]: any;
    value?: string | number;
    max?: string;
  };
  placeholder?: string;
  fieldState: { error?: FieldError };
}

const UIInput = ({
  label,
  placeholder,
  type = "text",
  field,
  fieldState,
}: UIInputProps) => {
  return (
    <div className="">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        value={field.value || ""}
        type={type}
        className={`focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 ${fieldState?.error ? " border-red-500 " : ""}`}
        placeholder={placeholder}
        onChange={(e) => {
          field.onChange(e);
        }}
      />
      {fieldState?.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};

export default UIInput;
