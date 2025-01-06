"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import UIButton from "@/components/UI/UIButton";
import UIInput from "@/components/UI/UIInput";
import UISelect from "@/components/UI/UISelect";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

const BookmarkAdd = () => {
  const [loading, setLoading] = useState(false);
  const method = useForm({
    defaultValues: {
      name: "",
      category: "",
      avatar: "",
    },
  });
  const onSubmit = (data: {
    name: string;
    category: string;
    avatar: string;
  }) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add member" />
      <div className="flex flex-col gap-9">
        <div className="mx-auto w-full max-w-[600px] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Member Form
            </h3>
          </div>
          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6">
                  <Controller
                    rules={{ required: "Name is required" }}
                    name="name"
                    control={method.control}
                    render={({ field, fieldState }) => (
                      <div className="w-full">
                        <UIInput
                          label="Name"
                          placeholder="Type Name"
                          fieldState={fieldState}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <Controller
                    rules={{ required: "Group is required" }}
                    name="category"
                    control={method.control}
                    render={({ field, fieldState }) => (
                      <div className="w-full">
                        <UISelect
                          label="Group"
                          placeholder="Type Name"
                          fieldState={fieldState}
                          field={field}
                        />
                      </div>
                    )}
                  />
                  <Controller
                    name="avatar"
                    control={method.control}
                    render={({ field, fieldState }) => (
                      <div className="w-full">
                        <div>
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Avatar
                          </label>
                          <input
                            type="file"
                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                          />
                        </div>
                      </div>
                    )}
                  />
                  <UIButton loading={loading} variant="submit">
                    Add Member
                  </UIButton>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BookmarkAdd;
