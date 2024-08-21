"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MUIBox, MUITypography } from "@/components/MUI";
import { Spin } from "antd";
import { getDetailNew } from "@/api/auth/actions";

const NewDetail = () => {
   const params = useParams();
   const [spin, setSpin] = useState(true);

   const { id } = params;

   const [newData, setNewData] = useState(null);

   useEffect(() => {
      id &&
         getDetailNew(id)
            .then((response: { content: any }) => {
               setNewData(response.content);

               // return response.content;
            })

            .catch((error) => {
               console.error("There was a problem with the fetch operation:", error);
            })
            .finally(() => {
               setSpin(false);
            });
   }, []);

   useEffect(() => {
      id &&
         getDetailNew(id)
            .then((response: { content: any }) => {
               setNewData(response.content);

               // return response.content;
            })
            // .then((data) => {
            //    setNewData(data);

            //    console.log("son data", data);
            // })
            .catch((error) => {
               console.error("There was a problem with the fetch operation:", error);
            })
            .finally(() => {
               setSpin(false);
            });
   }, [id, setSpin, setNewData]);
   return (
      <>
         <Spin spinning={spin}>
            {/* <MUIBox
               sx={{
                  width: "100%",
                  height: "50vh",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${BASE_URL_IMG_WITHOUT_TOKEN + newData?.imageTitle})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            ></MUIBox> */}
            <MUIBox className="container">
               <MUIBox sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
                  <MUITypography sx={{ fontSize: "50px", fontWeight: "bold", textAlign: "center" }}>
                     {newData?.title}
                  </MUITypography>
               </MUIBox>
               <MUIBox>
                  <MUITypography sx={{ textAlign: "justify" }}>
                     <div dangerouslySetInnerHTML={{ __html: newData?.content }} />
                  </MUITypography>
               </MUIBox>
            </MUIBox>
         </Spin>
      </>
   );
};

export default NewDetail;
