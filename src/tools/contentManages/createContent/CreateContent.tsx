import React, { FC, useState } from "react";
import ImageUpload from "../../fields/imageUpload/ImageUpload";
import Style from "./CreateContent.module.scss";
import TextField from "../../fields/hookFormField/textField/TextField";
import { useForm } from "react-hook-form";
import Row from "../../sheared/row/Row";
import HtmlEditor from "../../sheared/htmlEditor/HtmlEditor";
import { Item } from "../../dashboardLayout/ItemDashboard";
import TextAreaField from "../../fields/hookFormField/textAreaFeild/TextAreaField";
import MenuDropDow from "../../fields/dropDown/MenuDropDow";
import { ITableDropDown } from "../../../viewModel/types/TableTypes/IIsActiveDropDown";
import DropDownField from "../../fields/hookFormField/dropDownField/DropDownField";

interface IProps {
  nameContent?: string;
}

type FormValues = {
  image_text: string;
  seo_title: string;
  key_words: string;
  title_fa: string;
  title_en: string;
  author: string;
  short_link: string;
  source_link: string;
  source_title: string;
  date_reals: Date;
  expire_date: Date;
  show_place: number;
  advertisement_place: number;
  label: string[];
};

const CreateContent: FC<IProps> = ({ nameContent }) => {
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [isLocation, setIsLocation] = useState<number | string>(0);

  const optionsLocation: ITableDropDown[] = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
  ];

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      image_text: "",
      seo_title: "",
      key_words: "",
    },
    mode: "all",
  });
  const onSubmit = (data: FormValues) => console.log(data);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setVideo(file);
      console.log(convertFileToUrl(file));
    }
  };

  const convertFileToUrl = (file: File): string => URL.createObjectURL(file);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>افزودن {nameContent ?? "خبر"}</h2>
      <div className={Style.image_container}>
        <ImageUpload
          id="upload_image_1"
          placeholder="آپلود عکس خبر"
          image={image}
          onChangeMethod={handleChangeImage}
          srcShow={image !== null ? convertFileToUrl(image) : ""}
          accept="image"
          removeHandle={() => setImage(null)}
        />

        <ImageUpload
          id="upload_video_1"
          placeholder="آپلود ویدیو خبر"
          image={video}
          onChangeMethod={handleChangeVideo}
          srcShow={video !== null ? convertFileToUrl(video) : ""}
          accept="video"
          removeHandle={() => setVideo(null)}
        />
      </div>

      <Row w={"100%"} items="center" justify="space-between">
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="image_text"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="متن جایگذین عکس"
            placeHolder="متن جایگذین عکس"
          />
        </Item>
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="seo_title"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="عنوان سئو"
            label="عنوان سئو"
          />
        </Item>
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="key_words"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="کلمات کلیدی"
            placeHolder="کلمات کلیدی"
          />
        </Item>
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="title_fa"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تیتر خبر (فارسی)"
            placeHolder="تیتر خبر (فارسی)"
          />
        </Item>
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="title_en"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="تیتر خبر (انگلیسی)"
            label="تیتر خبر (انگلیسی)"
          />
        </Item>
        <Item width="30%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="author"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="نویسنده"
            placeHolder="نویسنده"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"200%"}>
          <TextAreaField<FormValues>
            name="author"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="توضیحات"
            placeHolder="توضیحات"
          />
        </Item>
      </Row>
      <Row w="100%">
        <Item
          width="100%"
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <HtmlEditor />
        </Item>
      </Row>
      <Row w="100%" items="center" justify="flex-start" gapX="1rem">
        {/* 
  advertisement_place: number;
  label: string[]; */}
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="short_link"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="لینک کوتاه"
            placeHolder="لینک کوتاه"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="source_link"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="لینک منبع"
            placeHolder="لینک منبع"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="source_title"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="عنوان منبع"
            placeHolder="عنوان منبع"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="date_reals"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تاریخ انتشار"
            placeHolder="تاریخ انتشار"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="expire_date"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تاریخ انقضا"
            placeHolder="تاریخ انقضا"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          {/* <TextField<FormValues>
            name="show_place"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="مکان نمایش محتوا"
            placeHolder="مکان نمایش محتوا"
          /> */}
          <DropDownField
            state={isLocation}
            setState={(value) => {
              setIsLocation(value);
            }}
            options={optionsLocation}
            label="مکان نمایش محتوا"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="advertisement_place"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="مکان تبلیغ"
            placeHolder="مکان تبلیغ"
          />
        </Item>
        <Item width="30%" smWidth="100%">
          <TextField<FormValues>
            name="label"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="برچسب"
            placeHolder="برچسب"
          />
        </Item>
      </Row>
      <button type="submit">acc</button>
    </form>
  );
};

export default CreateContent;
