import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import UIButton from "../UI/UIButton";
import UIInput from "../UI/UIInput";

interface AddEditBookmarkProps {
  isEdit: boolean;
  open: boolean;
  onOpen: (open: boolean) => void;
}

const AddEditBookmark = ({
  isEdit,
  open = false,
  onOpen,
}: AddEditBookmarkProps) => {
  const method = useForm({
    defaultValues: {
      title: "",
      description: "",
      url: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: {
    id?: string;
    title: string;
    description: string;
    url: string;
  }) => {
    try {
      setLoading(true);
      console.log(data);
      setTimeout(() => {
        onOpen(false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {open && (
        <div className="fixed left-0 right-0 top-0 z-999 flex h-[calc(100%-1rem)] max-h-full w-full justify-center overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,.5)] md:inset-0">
          <div className="relative top-10 max-h-full w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isEdit ? "Edit" : "Create New"} Bookmark
                </h3>
                <button
                  type="button"
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={() => onOpen(false)}
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <FormProvider {...method}>
                <form
                  className="p-4 md:p-5"
                  onSubmit={method.handleSubmit(onSubmit)}
                >
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <Controller
                      rules={{ required: "Title is required" }}
                      name="title"
                      control={method.control}
                      render={({ field, fieldState }) => (
                        <div className="col-span-2">
                          <UIInput
                            label="Title"
                            placeholder="Type bookmark title"
                            fieldState={fieldState}
                            field={field}
                          />
                        </div>
                      )}
                    ></Controller>
                    <Controller
                      rules={{ required: "URL is required" }}
                      name="url"
                      control={method.control}
                      render={({ field, fieldState }) => (
                        <div className="col-span-2">
                          <UIInput
                            label="URL"
                            placeholder="Type bookmark URL"
                            fieldState={fieldState}
                            field={field}
                          />
                        </div>
                      )}
                    ></Controller>
                    <Controller
                      name="description"
                      control={method.control}
                      render={({ field, fieldState }) => (
                        <div className="col-span-2">
                          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Bookmark Description
                          </label>
                          <textarea
                            rows={4}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Write bookmark description here"
                            onChange={field.onChange}
                          ></textarea>
                        </div>
                      )}
                    ></Controller>
                  </div>

                  <UIButton loading={loading} variant="submit">
                    {isEdit ? "Update" : "Create"} Bookmark
                  </UIButton>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEditBookmark;
