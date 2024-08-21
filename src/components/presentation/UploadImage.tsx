import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

function getImage(img, callback) {
   const reader = new FileReader();
   reader.addEventListener("load", () => callback(reader.result));
   reader.readAsDataURL(img);
}

function beforeUpload(file) {
   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
   if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
   }
   const isLt2M = file.size / 1024 / 1024 < 2;
   if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
   }
   return isJpgOrPng && isLt2M;
}

export const UploadImage = () => {
   const [loading, setLoading] = useState(false);
   const [imagePath, setImagePath] = useState("");

   const setProfilePicture = (img) => {
      console.log("set profile picture");
   };

   const handleChange = (info) => {
      console.log("running handle change");
      if (info.file.status === "uploading") {
         setLoading(true);
         return;
      }
      if (info.file.status === "done") {
         // Get this url from response in real world.
         getImage(info.file.originFileObj, (imageUrl) => {
            setImagePath(imageUrl);
            setLoading(false);
            setProfilePicture(imageUrl);
         });
      }
   };

   const handleUpload = (file) => {
      const formData = new FormData();
      formData.append("file", file);

      fetch("https://haisamlogistics.com/api/v1/admin/upload", {
         method: "POST",
         body: formData,
         headers: {
            Authorization: "Bearer " + localStorage.getItem("Access-Token"),
         },
      }).then(function (response) {
         if (response.status === 200) {
            console.log(response);
            setLoading(false);
         }
      });
   };

   const uploadButton = (
      <div>
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>Upload</div>
      </div>
   );
   return (
      <div>
         {" "}
         Change Profile Picture :
         <ImgCrop>
            <Upload
               name="avatar"
               listType="picture-card"
               className="avatar-uploader"
               showUploadList={false}
               customRequest={handleUpload}
               beforeUpload={beforeUpload}
               onChange={handleChange}
            >
               {imagePath ? <Image src={imagePath} alt="avatar" fill style={{ objectFit: "cover" }} /> : uploadButton}
            </Upload>
         </ImgCrop>
      </div>
   );
};

export default UploadImage;
