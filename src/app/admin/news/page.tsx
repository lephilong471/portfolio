"use client";
import { MUIBox } from "@/components/MUI";
// import MCKEditor from "@/components/presentation/MCKEditor";
import { Button, Form, Input, Select, UploadFile } from "antd";
import React, { useState, useEffect } from "react";
import UploadBasic from "@/components/presentation/UploadNew";
import { createNews } from "@/api/auth/actions";
import { useTranslation } from "react-i18next";
import { PATH } from "@/config/routes";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";

const MCKEditor = dynamic(() => import("@/components/presentation/MCKEditor"), { ssr: false });

const Post = () => {
   const [form] = Form.useForm();
   const [fileList, setFileList] = useState<UploadFile[]>([]);
   const [contentData, setContentData] = useState("");
   const router = useRouter();
   const { t } = useTranslation();
   const [loading, setLoading] = useState(false);
   const [token, setToken] = useState("");

   useEffect(() => {
      if (typeof window !== "undefined") {
         const storedToken = localStorage.getItem("token") || localStorage.getItem("Access-Token");
         setToken(storedToken || "");
      }
   }, []);

   const onFinish = (values) => {
      const body = {
         newType: values.newType,
         imageTitle: fileList[0].response.path,
         imageContent: [
            {
               type: "IMAGE",
               url: fileList[0].response.path,
            },
         ],
         title: values.title,
         content: contentData,
      };

      createNews(body, token).finally(() => {
         router.push(PATH.PORTAL);
         setLoading(false);
      });
   };

   return (
      <MUIBox className="container" mt={15}>
         <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
               name="newType"
               label={t("new_type")}
               rules={[
                  {
                     required: true,
                     message: "Trường bắt buộc nhập",
                  },
               ]}
            >
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
               <UploadBasic fileList={fileList} setFileList={setFileList} maxCount={1} />
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
                  disabled={loading}
                  onClick={() => {
                     form.submit();
                     setLoading(true);
                  }}
                  type="primary"
               >
                  {t("save")}
               </Button>
            </MUIBox>
            {/* <Button onClick={() => form.submit()} type="primary">
               {t("save")}
            </Button> */}
         </Form>
      </MUIBox>
   );
};

export default Post;
