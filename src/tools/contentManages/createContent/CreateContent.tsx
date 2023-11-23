import React, { FC, useEffect, useState } from "react";
import ImageUpload from "../../fields/imageUpload/ImageUpload";
import Style from "./CreateContent.module.scss";
import TextField from "../../fields/hookFormField/textField/TextField";
import { Controller, useForm } from "react-hook-form";
import Row from "../../sheared/row/Row";
import HtmlEditor from "../../sheared/htmlEditor/HtmlEditor";
import { Item } from "../../dashboardLayout/ItemDashboard";
import TextAreaField from "../../fields/hookFormField/textAreaFeild/TextAreaField";
import { ITableDropDown } from "../../../viewModel/types/TableTypes/IIsActiveDropDown";
import DropDownField from "../../fields/hookFormField/dropDownField/DropDownField";
import { ResultModel } from "../../../viewModel/types/IApi";
import { IAuthors } from "../../../viewModel/types/IAuthors";
import { CallApi } from "../../../services/api/CallApi";
import {
  CreateContentUrl,
  GetAuthors,
  GetLabels,
} from "../../../services/api/ApiRoutes";
import { StatusCode } from "../../../viewModel/enums/StatusCode";
import { convertToDropDown } from "../../../services/utils/CovertToDropDownObj";
import { ILabels } from "../../../viewModel/types/ILabels";
import CheckField from "../../fields/hookFormField/checkField/CheckField";
import Button from "../../button/Button";
import MultiDropDownField from "../../fields/hookFormField/multiDropDownField/MultiDropDownField";
import DatePickerField from "../../fields/hookFormField/datePickerField/DatePickerField";
import { ContentFormType } from "../../../viewModel/types/content/TypeFormContent";
import { ICreateContentRequest } from "../../../viewModel/types/content/ICreateContent";
import { ShowToast } from "../../toast/Toastify";
import { StatusEnumToast } from "../../../viewModel/enums/StatusToastEnum";
import { useNavigate, useParams } from "react-router-dom";
import { convertPersianDateToMilady } from "../../table/UtiltyTable";
import { CircularProgress } from "@mui/material";

interface IProps {
  nameContent?: string;
}

const CreateContent: FC<IProps> = ({ nameContent }) => {
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [optionsAuthor, setOptionsAuthor] = useState<[] | ITableDropDown[]>([]);
  const [optionsLabels, setOptionsLabels] = useState<[] | ITableDropDown[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const createContentRequest = async (body: ICreateContentRequest) => {
    setLoader(true);
    try {
      const createResult: ResultModel<ICreateContentRequest> =
        await CallApi<ICreateContentRequest>(
          CreateContentUrl,
          JSON.stringify(body),
          true,
          "POST",
          false
        );

      if (createResult.statusCode === StatusCode.Success) {
        ShowToast(StatusEnumToast.success, "با موفقیت ثبت شد");
        navigate(-1);
      } else {
        ShowToast(StatusEnumToast.error, "خطایی رخ داده");
      }
    } catch (error) {
      ShowToast(StatusEnumToast.error, "error catch");
    } finally {
      setLoader(false);
    }
  };

  const { handleSubmit, control } = useForm<ContentFormType>({
    defaultValues: {
      titr: "",
      lead: "",
      contentText: "",
      picFile: "",
      releaseTime: null,
      label: [],
      favorite: false,
      visitNo: 0,
      confirmed: false,
      telegram: false,
      telegramSent: false,
      files: "",
      sourceTitle: "",
      sourceLink: "",
      authorUserAccountId: null,
      likeNum: 0,
      disLikeNum: 0,
      insertDate: null,
      lastUpdate: null,
      videoFile: "",
      voiceFile: "",
      expireDate: null,
      newsPaper: false,
      picAlt: "",
      keyword: "",
      title: "",
      adLocation: 0,
      englishTitr: "",
      showLocation: 0,
      showAuthor: true,
    },
    mode: "all",
  });
  const onSubmit = (data: ContentFormType) => {
    const arrLabel = data.label.map((item) => item.value);
    const newLabel = arrLabel.join(",");
    let reqBody: ICreateContentRequest = {
      ...data,
      contentTypeId: id ? +id : 0,
      label: newLabel,
      insertDate: convertPersianDateToMilady(new Date()),
      lastUpdate: convertPersianDateToMilady(new Date()),
    };
    console.log(id, "data is ready ", reqBody);
    createContentRequest(reqBody);
  };

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

  const submitter = () => {
    handleSubmit((data) => onSubmit(data))();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={Style.title_page}>افزودن {nameContent ?? "خبر"}</h2>
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
          <TextField<ContentFormType>
            name="picAlt"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="متن جایگذین عکس"
            placeHolder="متن جایگذین عکس"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="title"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="عنوان سئو"
            label="عنوان سئو"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="keyword"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="کلمات کلیدی"
            placeHolder="کلمات کلیدی"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="titr"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تیتر خبر (فارسی)"
            placeHolder="تیتر خبر (فارسی)"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="englishTitr"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            placeHolder="تیتر خبر (انگلیسی)"
            label="تیتر خبر (انگلیسی)"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"30%"}>
          <DropDownField<ContentFormType>
            name={"authorUserAccountId"}
            control={control}
            rules={{
              required: "این فیلد اجباری است",
            }}
            options={optionsAuthor}
            label="نویسنده"
          />
        </Item>
        <Item width="100%" smWidth={"100%"} mdWidth={"100%"}>
          <TextAreaField<ContentFormType>
            name="lead"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="خلاصه خبر"
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
          <Controller
            name="contentText"
            control={control}
            render={({ field }) => (
              <HtmlEditor
                editorData={field.value}
                setEditorData={field.onChange}
              />
            )}
          />
        </Item>
      </Row>
      <Row w="100%" items="center" justify="space-between">
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="sourceLink"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="لینک منبع"
            placeHolder="لینک منبع"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="sourceTitle"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="عنوان منبع"
            placeHolder="عنوان منبع"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DatePickerField<ContentFormType>
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            name="releaseTime"
            label="تاریخ انتشار"
            placeholder="تاریخ انتشار"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DatePickerField<ContentFormType>
            name="expireDate"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="تاریخ انقضا"
            placeholder="تاریخ انقضا"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <DropDownField<ContentFormType>
            control={control}
            name="showLocation"
            rules={{ required: "این فیلد اجباری است" }}
            options={optionsLocation}
            label="مکان نمایش محتوا"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <TextField<ContentFormType>
            name="adLocation"
            control={control}
            rules={{ required: "این فیلد اجباری است" }}
            label="مکان تبلیغ"
            placeHolder="مکان تبلیغ"
            type="number"
          />
        </Item>
        <Item width="100%" smWidth="100%" mdWidth={"30%"}>
          <MultiDropDownField<ContentFormType>
            name="label"
            control={control}
            rules={{
              required: "این فیلد اجباری است",
            }}
            options={optionsLabels}
            label="برچسب"
            limitTag={1}
            placeholder="برچسب ها"
            id="labelSelect_multi"
          />
        </Item>
      </Row>
      <Row w={"100%"} mt="1rem" justify={"space-between"} items={"center"}>
        <CheckField<ContentFormType>
          control={control}
          name="confirmed"
          label="تایید شده"
        />
        <CheckField<ContentFormType>
          control={control}
          name="telegramSent"
          label="ارسال در تلگرام"
        />
        <CheckField<ContentFormType>
          control={control}
          name="favorite"
          label="علاقه مندی ها"
        />
        <CheckField<ContentFormType>
          control={control}
          name="showAuthor"
          label="نمایش نویسنده"
        />
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
          {loader ? (
            <Row
              w={"100%"}
              justify={"center"}
              items={"center"}
            >
              <CircularProgress color={"primary"} size={24} />
            </Row>
          ) : (
            <Button text={"انتشار"} clickMethod={submitter} />
          )}
        </Item>
      </Row>
    </form>
  );
};

export default CreateContent;
