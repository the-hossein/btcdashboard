import React, { FC, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import MyUploadAdapter from "./MyUploadAdaptor";
import {
  Alignment,
  AlignmentEditing,
  AlignmentUI,
} from "@ckeditor/ckeditor5-alignment";

interface IProps {
  editorData: string;
  setEditorData: (e: string) => void;
}

const HtmlEditor: FC<IProps> = ({ editorData, setEditorData }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          language: "fa",
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
