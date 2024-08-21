"use client";
import { MUIBox } from "@/components/MUI";
// import MCKEditor from "@/components/presentation/MCKEditor";
import { Button, Form, Input, Select, Spin, UploadFile } from "antd";
import React, { useEffect, useState } from "react";
import UploadBasic from "@/components/presentation/UploadNew";
import { useParams, useRouter } from "next/navigation";
import { PATH } from "@/config/routes";
import { getDetailNew, updateNew } from "@/api/auth/actions";
import { useTranslation } from "react-i18next";
import { BASE_URL_IMG_WITHOUT_TOKEN } from "@/config";
import { ArrowLeftOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const MCKEditor = dynamic(() => import("@/components/presentation/MCKEditor"), { ssr: false });

const NewsDetail = () => {
   //  const router = useRouter();
   const params = useParams();
   const router = useRouter();
   const { t } = useTranslation();

   const { id } = params;

   const [form] = Form.useForm();
   const [contentData, setContentData] = useState("");
   const [fileList, setFileList] = useState<UploadFile[]>([]);
   const [linkImage, setLinkImage] = useState<UploadFile[]>([]);
   const [path, setPath] = useState("");
   // const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
   const [loading, setLoading] = useState(false);
   const [spin, setSpin] = useState(false);

   const [token, setToken] = useState("");

   useEffect(() => {
      if (typeof window !== "undefined") {
         const storedToken = localStorage.getItem("token");
         setToken(storedToken || "");
      }
   }, []);

   useEffect(() => {
      setSpin(true);
      getDetailNew(id)
         .then((response: { content: any }) => {
            return response.content;
         })
         .then((data) => {
            form.setFieldsValue({
               newType: data.newType,
               title: data.title,
               content: data.content,
            });
            setPath(data.imageTitle);
            setLinkImage([
               {
                  uid: "-1",
                  name: "image title",
                  status: "done",
                  url: `${BASE_URL_IMG_WITHOUT_TOKEN + data.imageTitle}`,
               },
            ]);

            setContentData(data.content);
            setSpin(false);
         })
         .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
            setSpin(false);
         })
         .finally(() => {
            setSpin(false);
         });
   }, [id]);

   const onFinish = async (values) => {
      const body = {
         id: id,
         newType: values.newType,
         imageTitle: fileList.length > 0 ? fileList[0].response.path : path,
         imageContent: [
            {
               type: "IMAGE",
               url: fileList.length > 0 ? fileList[0].response.path : path,
            },
         ],
         title: values.title,
         content: contentData,
      };

      updateNew(id, body, token)
         .then(() => setLoading(true))
         .catch(() => {
            setLoading(false);
         })
         .finally(() => {
            setLoading(true);
            router.push(PATH.PORTAL);
         });
   };

   return (
      <MUIBox className="container" mt={15}>
         <Spin spinning={spin}>
            <Form form={form} onFinish={onFinish} layout="vertical">
               <Form.Item name="newType" label={t("new_type")}>
                  <Select
                     style={{ width: "200px" }}
                     showSearch
                     placeholder={t("new_type")}
                     filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                     options={[
                        { value: "NEWS", label: "NEWS" },
                        { value: "BLOG", label: "BLOG" },
                     ]}
                  />
               </Form.Item>
               <Form.Item name="file" label={t("image")}>
                  <UploadBasic
                     fileList={fileList.length > 0 ? fileList : linkImage}
                     setFileList={setFileList}
                     maxCount={1}
                  />
               </Form.Item>

               <Form.Item name="title" label={t("title")}>
                  <Input placeholder={t("title")} />
               </Form.Item>
               <Form.Item name="content" label={t("content")}>
                  <MCKEditor setEditorData={setContentData} editorData={contentData} />
               </Form.Item>
               <MUIBox sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Button icon={<ArrowLeftOutlined />} onClick={() => router.push(PATH.PORTAL)}></Button>

                  <Button
                     loading={loading}
                     onClick={() => {
                        form.submit();
                        setLoading(true);
                     }}
                     type="primary"
                  >
                     {t("save")}
                  </Button>
               </MUIBox>
            </Form>
         </Spin>
      </MUIBox>
   );
};

export default NewsDetail;
