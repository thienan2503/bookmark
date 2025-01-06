"use client";
import { useState } from "react";
import AddEditBookmark from "../AddEditBookmark/AddEditBookmark";
import HeaderAction from "../HeaderAction/HeaderAction";
import UIButton from "../UI/UIButton";
import CardBookmark from "./CardBookmark";

interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
}

const DATA: Bookmark[] = [
  {
    id: "1",
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    url: "https://tailwindcss.com/",
  },
  {
    id: "2",
    title: "Next.js",
    description: "The React Framework for Production.",
    url: "https://nextjs.org/",
  },
  {
    id: "3",
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
  },
  {
    id: "4",
    title: "TypeScript",
    description: "TypeScript extends JavaScript by adding types.",
    url: "https://www.typescriptlang.org/",
  },
];

const CardBookmarkList = () => {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <div>
      <HeaderAction>
        <UIButton variant="primary" onClick={() => setOpenCreate(true)}>
          Add Bookmark
        </UIButton>
      </HeaderAction>
      <AddEditBookmark
        isEdit={false}
        open={openCreate}
        onOpen={setOpenCreate}
      />
      <div className="grid grid-cols-4 gap-4">
        {DATA.map((bookmark) => (
          <CardBookmark
            key={bookmark.id}
            title={bookmark.title}
            description={bookmark.description}
            url={bookmark.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CardBookmarkList;
