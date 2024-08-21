import React from "react";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const UploadBasic = (props) => {
   //  const [fileList, setFileList] = useState<UploadFile[]>([]);

   const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
      props.setFileList(newFileList);
   };

   const onPreview = async (file: UploadFile) => {
      let src = file.url as string;
      if (!src) {
         src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as FileType);
            reader.onload = () => resolve(reader.result as string);
         });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
   };

   const customUpload = async (options: any) => {
      const { onSuccess, onError, file } = options;

      const formData = new FormData();
      formData.append("file", file);

      try {
         const response = await fetch("https://haisamlogistics.com/api/v1/admin/upload", {
            method: "POST",
            body: formData,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
         });

         if (response.ok) {
            const responseData = await response.json();
            onSuccess(responseData, file);
         } else {
            onError(new Error("Upload failed"));
         }
      } catch (error) {
         onError(error);
      }
   };

   return (
      <ImgCrop rotationSlider>
         <Upload
            customRequest={customUpload}
            listType="picture-card"
            fileList={props.fileList}
            onChange={onChange}
            onPreview={onPreview}
            maxCount={props.maxCount}
         >
            {props.fileList.length < 1 && "+ Upload"}
         </Upload>
      </ImgCrop>
   );
};

export default UploadBasic;
