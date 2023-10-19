import React, { FC, useEffect, useState } from "react";
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
import { ResultAuthors, ResultModel } from "../../../viewModel/types/IApi";
import { IAuthors } from "../../../viewModel/types/IAuthors";
import { CallApi } from "../../../services/api/CallApi";
import { GetAuthors, GetLabels } from "../../../services/api/ApiRoutes";
import { StatusCode } from "../../../viewModel/enums/StatusCode";
import { convertToDropDown } from "../../../services/utils/CovertToDropDownObj";
import { ILabels } from "../../../viewModel/types/ILabels";
import CheckField from "../../fields/hookFormField/checkField/CheckField";
import Button from "../../button/Button";
import { Autocomplete, SelectChangeEvent } from "@mui/material";
import MultiDropDownField from "../../fields/hookFormField/multiDropDownField/MultiDropDownField";
import DatePicker from "../../fields/datePicker/DatePicker";
import DatePickerField from "../../fields/hookFormField/datePickerField/DatePickerField";

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
  const [author, setAuthor] = useState<number | null>(null);
  const [labelSelect, setLabelSelect] = useState<ITableDropDown[] | []>([]);
  const [optionsAuthor, setOptionsAuthor] = useState<[] | ITableDropDown[]>([]);
  const [optionsLabels, setOptionsLabels] = useState<[] | ITableDropDown[]>([]);

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
    }
  };

  const convertFileToUrl = (file: File): string => URL.createObjectURL(file);

  const getAuthors = async () => {
    const authors: ResultModel<IAuthors[]> = await CallApi(
      GetAuthors,
      null,
      false,
      "GET",
      false
    );

    if (authors.statusCode === StatusCode.Success) {
      const myAuthors = authors?.data?.data ?? null;
      if (myAuthors !== null) {
        const readyArr = convertToDropDown<IAuthors>(myAuthors);
        setOptionsAuthor(readyArr);
      }
    }
  };

  const getLabels = async () => {
    const labels: ResultModel<ILabels[]> = await CallApi(
      GetLabels,
      null,
      false,
      "GET",
      false
    );

    if (labels.statusCode === StatusCode.Success) {
      console.log(labels);
      const arrayLabels = labels.data?.data ?? null;
      if (arrayLabels !== null) {
        const labelsDropdown: ITableDropDown[] = arrayLabels.map((item) => {
          return { label: item.text, value: item.value };
        });
        setOptionsLabels(labelsDropdown);
      }
    }
  };

  useEffect(() => {
    getAuthors();
    getLabels();
  }, []);

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
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="image_text"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="متن جایگذین عکس"
            placeHolder="متن جایگذین عکس"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="seo_title"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="عنوان سئو"
            label="عنوان سئو"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="key_words"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="کلمات کلیدی"
            placeHolder="کلمات کلیدی"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="title_fa"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تیتر خبر (فارسی)"
            placeHolder="تیتر خبر (فارسی)"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<FormValues>
            name="title_en"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="تیتر خبر (انگلیسی)"
            label="تیتر خبر (انگلیسی)"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <DropDownField
            state={author ?? ""}
            setState={(value) => {
              typeof value === "number" && setAuthor(value);
            }}
            options={optionsAuthor}
            label="نویسنده"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"100%"}>
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
      <Row w="100%" items="center" justify="space-between">
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<FormValues>
            name="short_link"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="لینک کوتاه"
            placeHolder="لینک کوتاه"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<FormValues>
            name="source_link"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="لینک منبع"
            placeHolder="لینک منبع"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<FormValues>
            name="source_title"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="عنوان منبع"
            placeHolder="عنوان منبع"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DatePickerField
            value={""}
            onChangeMethod={(e) => console.log(e)}
            // name="date_reals"
            // control={control}
            // rules={{ required: "این فیلد اجباری است" }}
            label="تاریخ انتشار"
            placeholder="تاریخ انتشار"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DatePickerField
            // name="expire_date"
            // control={control}
            // rules={{ required: "این فیلد اجباری است" }}
            value={""}
            onChangeMethod={(e) => console.log(e)}
            label="تاریخ انقضا"
            placeholder="تاریخ انقضا"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DropDownField
            state={isLocation}
            setState={(value) => {
              (typeof value === "string" || typeof value === "string") &&
                setIsLocation(value);
            }}
            options={optionsLocation}
            label="مکان نمایش محتوا"
          />
        </Item>
        <Row w="100%" items="center" justify="flex-start" gapX={"4.66666%"}>
          <Item width="100%" smWidth="100%" mdWidth={"30%"}>
            <TextField<FormValues>
              name="advertisement_place"
              control={control}
              rules={{ required: "این فیلد اجباری است" }}
              label="مکان تبلیغ"
              placeHolder="مکان تبلیغ"
            />
          </Item>
          <Item width="100%" smWidth="100%" mdWidth={"30%"}>
            <MultiDropDownField
              value={labelSelect}
              onChange={(event, newValue) => {
                setLabelSelect([...newValue]);
              }}
              options={optionsLabels}
              label="برچسب"
              limitTag={1}
              placeholder="برچسب ها"
              id="labelSelect_multi"
            />
          </Item>
        </Row>
      </Row>
      <Row w={"100%"} mt="1rem" justify={"space-between"} items={"center"}>
        <CheckField label="تایید شده" />
        <CheckField label="ارسال در تلگرام" />
        <CheckField label="علاقه مندی ها" />
        <CheckField label="نمایش نویسنده" />
      </Row>
      <Row
        w={"100%"}
        mt="2rem"
        justify={"flex-end"}
        gapX="1rem"
        items={"center"}
      >
        <Item width="100%" mdWidth="30%">
          <Button
            outline={true}
            text={"ارسال خبرنامه"}
            clickMethod={() => console.log("first")}
          />
        </Item>
        <Item width="100%" mdWidth="30%">
          <Button
            outline={true}
            text={"ارسال در تلگرام"}
            clickMethod={() => console.log("first")}
          />
        </Item>
        <Item width="100%" mdWidth="20%">
          <Button text={"انتشار"} clickMethod={() => console.log("first")} />
        </Item>
      </Row>
    </form>
  );
};

export default CreateContent;
