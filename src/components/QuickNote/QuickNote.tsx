'use client';
import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";

const QuickNote = () => {
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
    <div className="jodit-editor-container rounded-md border ">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default QuickNote;
