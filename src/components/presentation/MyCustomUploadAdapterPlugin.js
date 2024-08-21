import { CKEDITOR_URL_IMG } from "@/config";
import { getString } from "@/components/presentation/utilities/utilObject.js";
import { firstImageWithoutToken } from "@/components/presentation/utilities/utilObject.js";

class MyUploadAdapter {
   constructor(loader) {
      // The file loader instance to use during the upload.
      this.loader = loader;
   }

   // Starts the upload process.
   upload() {
      return this.loader.file.then(
         (file) =>
            new Promise((resolve, reject) => {
               this._initRequest();
               this._initListeners(resolve, reject, file);
               this._sendRequest(file);
            })
      );
   }

   // Aborts the upload process.
   abort() {
      if (this.xhr) {
         this.xhr.abort();
      }
   }

   // Note that your request may look different. It is up to you and your editor
   // integration to choose the right communication channel. This example uses
   // a POST request with JSON as a data structure but your configuration
   // could be different.

   _initRequest() {
      const xhr = (this.xhr = new XMLHttpRequest());
      xhr.open("POST", CKEDITOR_URL_IMG, true);
      xhr.responseType = "json";
      // Thêm token vào header
      const token = localStorage.getItem("token") || localStorage.getItem("Access-Token"); // hoặc lấy token từ nơi bạn lưu trữ
      if (token) {
         xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }
   }

   // Initializes XMLHttpRequest listeners.
   _initListeners(resolve, reject, file) {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = `Couldn't upload file: ${file.name}.`;

      xhr.addEventListener("error", () => {
         console.error("XHR error", xhr.status, xhr.statusText);
         reject(genericErrorText);
      });
      xhr.addEventListener("abort", () => reject());
      xhr.addEventListener("load", () => {
         const response = xhr.response;
         // console.log("Upload response:", response); // For debugging
         if (!response || response.error) {
            // console.error("Upload error:", response);
            return reject(response && response.error ? response.error.message : genericErrorText);
         }
         // Assuming the server returns { path: "image_url" }
         const imageUrl = firstImageWithoutToken(getString(response, "path"));
         // console.log("Final image URL:", imageUrl);
         resolve({ default: imageUrl });
      });
      if (xhr.upload) {
         xhr.upload.addEventListener("progress", (evt) => {
            if (evt.lengthComputable) {
               loader.uploadTotal = evt.total;
               loader.uploaded = evt.loaded;
            }
         });
      }
   }
   _sendRequest(file) {
      const data = new FormData();
      data.append("file", file);
      this.xhr.send(data);
   }
}

export default function MyCustomUploadAdapterPlugin(editor) {
   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      // Configure the URL to the upload script in your back-end here!
      return new MyUploadAdapter(loader);
   };
}
