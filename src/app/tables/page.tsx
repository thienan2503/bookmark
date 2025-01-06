"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UITable from "@/components/Tables/UITable";

const DATA_TABLE = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
];

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <UITable
          dataHeader={{
            firstName: "First Name",
            lastName: "Last Name",
            age: "Age",
            visits: "Visits",
            progress: "Progress",
            status: "Status",
          }}
          data={DATA_TABLE}
          hasAction={true}
          customColumns={{
            age: {
              cell: (props) => {
                return (
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success">
                    {props.getValue() as string}
                  </p>
                );
              },
            },
          }}
        />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
