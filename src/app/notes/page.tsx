import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import QuickNote from "@/components/QuickNote/QuickNote";

const NotesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Quick note" />
      <QuickNote />
    </DefaultLayout>
  );
};

export default NotesPage;
