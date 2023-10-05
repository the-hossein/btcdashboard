import React, { FC, useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import MyUploadAdapter from "./MyUploadAdaptor";
import { Alignment, AlignmentEditing, AlignmentUI } from "@ckeditor/ckeditor5-alignment";

interface IProps {}

const HtmlEditor: FC<IProps> = () => {
  const [editorData, setEditorData] = useState("");

  // useEffect(() => {
  //   const editorElement = document.querySelector("#editor") as HTMLElement;
  //   if (editorElement) {
  //     ClassicEditor.create(editorElement, {
  //       plugins: [Alignment],
  //     })
  //       .then((editor) => {
  //         // editor.plugins.init(Alignment);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, []);

  // console.log(Alignment, "Alignment")



  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          language: "fa",
          // alignment: {
          //   options: ["left", "center", "right", "justify"],
          // },
          // plugins: [Alignment],
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "|",
              "|",
              "alignment:left", // دکمه چپ چین
              "alignment:right", // دکمه چپ چین
              // "alignCenter", // دکمه وسط چین
              // "alignRight", // دکمه راست چین
              "|",
              "imageUpload", // افزودن دکمه بارگذاری تصاویر
              "undo",
              "redo",
            ],
          },
        }}
        onReady={(editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return new MyUploadAdapter(loader);
          };
        }}
        onChange={(event, editor) => {
          const data: string = editor.getData();
          setEditorData(data);
        }}
      />
    </>
  );
};

export default HtmlEditor;
