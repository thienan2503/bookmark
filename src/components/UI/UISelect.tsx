import { FieldError } from "react-hook-form";

interface UISelectProps {
  label: string;
  options?: { value: string; label: string }[];
  field: {
    [x: string]: any;
    value?: string | number;
  };
  placeholder?: string;
  fieldState: { error?: FieldError };
}

const UISelect = ({
  label,
  placeholder,
  options,
  field,
  fieldState,
}: UISelectProps) => {
  return (
    <div className="mb-4.5">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={field.value || ""}
          onChange={(e) => {
            field.onChange(e);
          }}
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 ${fieldState?.error ? " border-red-500 " : ""}`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            {placeholder}
          </option>
          <option value="USA" className="text-body dark:text-bodydark">
            USA
          </option>
          <option value="UK" className="text-body dark:text-bodydark">
            UK
          </option>
          <option value="Canada" className="text-body dark:text-bodydark">
            Canada
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2"></span>
      </div>
      {fieldState?.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};
export default UISelect;
