import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardBookmarkList from "@/components/Cards/CardBookmarkList";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const BookmarkDetailPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bookmark Name" />
      <CardBookmarkList />
    </DefaultLayout>
  );
};

export default BookmarkDetailPage;
