"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";

const NotesPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
      height: 500,
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "ul",
        "ol",
        "outdent",
        "indent",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "image",
        "table",
        "link",
        "align",
        "undo",
        "redo",
        "hr",
        "copyformat",
        "fullsize",
        "selectall",
        "print",
        "source",
      ],
    }),
    [],
  );
  const saveNote = () => {
    console.log(content);
  };
  saveNote();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Quick note" />
      <div className="jodit-editor-container rounded-md border ">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>
    </DefaultLayout>
  );
};

export default NotesPage;
