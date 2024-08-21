"use client";
import { MUIBox } from "@/components/MUI";
import TableData from "@/components/presentation/TableData";
import { Button, Image, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@/config/routes";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { deleteNew, getListNews } from "@/api/auth/actions";
import { BASE_URL_IMG_WITHOUT_TOKEN } from "@/config";

const Portal = () => {
   const router = useRouter();
   const [listNews, setListNews] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [idDelete, setIdDelete] = useState(null);
   const { t } = useTranslation();
   const [loading, setLoading] = useState(false);
   const [token, setToken] = useState("");

   const [needLoadData, setNeedLoadData] = useState(false);

   useEffect(() => {
      if (typeof window !== "undefined") {
         const storedToken = localStorage.getItem("token");
         setToken(storedToken || "");
      }
   }, []);

   useEffect(() => {
      setLoading(true);
      getListNews()
         .then((res: { content: any }) => {
            setListNews(res?.content);
         })
         .catch(() => {
            setLoading(false);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   useEffect(() => {
      setLoading(true);
      getListNews()
         .then((res: { content: any }) => {
            setListNews(res?.content);
         })
         .catch(() => {
            setLoading(false);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [needLoadData]);

   const handleOk = () => {
      deleteNew(idDelete, token)
         .catch(() => {
            setLoading(false);
         })
         .finally(() => {
            setLoading(false);
         });
      // fetch(`https://haisamlogistics.com/api/v1/admin/news/deleted/${idDelete}`, {
      //    method: "DELETE",
      //    headers: {
      //       Accept: "*/*",
      //       "Content-Type": "application/json",
      //       Authorization: "Bearer " + localStorage.getItem("token"),
      //    },
      // });
      setIsModalOpen(false);
      setNeedLoadData(!needLoadData);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

   const columns = [
      {
         title: "STT",
         width: 50,
         dataIndex: "index",
         key: "index",
         render: (_text, _record, index) => {
            return index + 1;
         },
      },
      {
         title: t("new_type"),
         width: 100,
         dataIndex: "newType",
         key: "newType",
         // fixed: "left",
         filterSearch: true,
      },
      {
         title: t("image"),
         width: 100,
         dataIndex: "imageTitle",
         key: "imageTitle",
         render: (_text, record, _index) => {
            return (
               <Image
                  width={100}
                  height={100}
                  src={`${BASE_URL_IMG_WITHOUT_TOKEN + record.imageTitle}`}
                  alt="Hình ảnh"
               />
            );
         },
         // fixed: "left",
         // sorter: true,
         // filterSearch: true,
      },
      // {
      //    title: "title",
      //    dataIndex: "title",
      //    key: "title",
      //    sorter: (a, b) => a.address.length - b.address.length,
      //    sortDirections: ["descend", "ascend"],
      // },
      {
         title: t("title"),
         width: 200,
         dataIndex: "title",
         key: "title",
         // fixed: "left",
         filterSearch: true,
      },
      {
         title: t("status"),
         width: 200,
         dataIndex: "status",
         key: "status",
         // fixed: "left",
         filterSearch: true,
      },

      {
         title: t("action"),
         key: "operation",
         // fixed: "right",
         width: 100,
         render: (_text, record, _index) => (
            <>
               <Button
                  type="primary"
                  onClick={() => {
                     router.replace(PATH.POST_EDIT.replace("[id]", record.id));
                  }}
               >
                  <EditFilled />
               </Button>
               <Button
                  danger
                  onClick={() => {
                     setIdDelete(record.id);
                     setIsModalOpen(true);
                  }}
               >
                  <DeleteFilled />
               </Button>
            </>
         ),
      },
   ];

   return (
      <MUIBox mt={15} className="container">
         <MUIBox>
            <Button onClick={() => router.push(PATH.POST_NEW)}>{t("add")}</Button>
         </MUIBox>
         <Spin spinning={loading}>
            <TableData columns={columns} data={listNews} scrollX={700} />
         </Spin>
         <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {t("confirm_delete_news")}
         </Modal>
      </MUIBox>
   );
};

export default Portal;
