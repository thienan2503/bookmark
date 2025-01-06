"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardMemberList from "@/components/Cards/CardMemberList";
import HeaderAction from "@/components/HeaderAction/HeaderAction";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UIButton from "@/components/UI/UIButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Members = [
  {
    id: "1",
    name: "Jane Cooper",
    role: "Frontend Developer",
  },
  {
    id: "2",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "3",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "4",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "5",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "6",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "7",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    id: "8",
    name: "John Doe",
    role: "Backend Developer",
  },
];

const BookmarksPage = () => {
  const router = useRouter();
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      console.log(data);
    };

    fetchMessage();
  }, []);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bookmark" urlBack="/" />
      <HeaderAction>
        <UIButton
          variant="primary"
          onClick={() => router.push("/bookmarks/member")}
        >
          Add Member
        </UIButton>
      </HeaderAction>
      <CardMemberList members={Members} />
    </DefaultLayout>
  );
};
export default BookmarksPage;
