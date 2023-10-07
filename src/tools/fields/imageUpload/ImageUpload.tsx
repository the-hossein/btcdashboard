import React, { FC, useState } from "react";
import style from "./ImageUpload.module.scss";
import { DocumentUpload, Trash } from "iconsax-react";

interface IProps {
  id: string;
  placeholder: string;
  image: File | null;
  onChangeMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
  srcShow: string;
  accept: "image" | "video";
  removeHandle: () => void;
}

enum FileEnum {
  image = "image/*",
  video = "video/*",
}

const ImageUpload: FC<IProps> = ({
  id,
  placeholder,
  image,
  onChangeMethod,
  srcShow,
  accept = "image",
  removeHandle,
}) => {
  return (
    <>
      <div className={`${style.base_field}`}>
        <label htmlFor={id} className={`${style.label_cover}`}>
          {image === null ? (
            <DocumentUpload
              className={style.svg_upload}
              color="var(--main-pen)"
              strokeWidth="1"
            />
          ) : accept === "image" ? (
            <img
              src={srcShow}
              alt="uploaded cover"
              className={style.image_uploaded}
            />
          ) : (
            <>
              <video className={style.video_uploaded} controls>
                <source src={srcShow} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </>
          )}
          <input
            type="file"
            hidden
            accept={FileEnum[accept]}
            id={id}
            onChange={onChangeMethod}
          />
        </label>
        <div className={style.controller}>
          <label htmlFor={id} className={style.placeholder}>
            {placeholder}
          </label>
          {!!image && (
            <Trash size={24} color="var(--error)" onClick={removeHandle} />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
