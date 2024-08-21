import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyCustomUploadAdapterPlugin from "@/components/presentation/MyCustomUploadAdapterPlugin.js";

function MCKEditor(props) {
   return (
      <div>
         <CKEditor
            editor={ClassicEditor}
            data={props.editorData}
            config={{
               toolbar: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "blockQuote",
                  "imageUpload",
                  "|",
                  "undo",
                  "redo",
               ],
               extraPlugins: [MyCustomUploadAdapterPlugin],
            }}
            onChange={(event, editor) => {
               const data = editor.getData();
               props.setEditorData(data);
            }}
            onError={(error, { willEditorRestart }) => {
               console.error("Editor error:", error);
               if (willEditorRestart) {
                  console.log("Editor will restart");
               }
            }}
         />
      </div>
   );
}

export default MCKEditor;
