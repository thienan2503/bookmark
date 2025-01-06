"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddEditBookmark from "../AddEditBookmark/AddEditBookmark";
import { dialogRef } from "../DialogConfirm/DialogConfirm";

interface CardBookmarkProps {
  title: string;
  description: string;
  url: string;
}

const CardBookmark = ({ title, description, url }: CardBookmarkProps) => {
  const [openEdit, setOpenEdit] = useState(false);
  const handleDelete = async () => {
    await dialogRef.current?.show({
      title: "Delete Bookmark",
      message: "Are you sure you want to delete this bookmark?",
      negative: {
        text: "Cancel",
      },
      positive: {
        text: "Delete",
        click: async () => {},
      },
      open: true,
    });
  };
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>

      <Link
        target="_blank"
        href={url}
        className="text-sm font-medium text-blue-500 "
      >
        Visit page
      </Link>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setOpenEdit(true)}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaEdit />
        </button>
        <button
          onClick={handleDelete}
          className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
        >
          <FaTrash />
        </button>
      </div>
      <AddEditBookmark isEdit={true} open={openEdit} onOpen={setOpenEdit} />
    </div>
  );
};

export default CardBookmark;
