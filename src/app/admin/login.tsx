"use client";
import { MUIBox, MUITypography } from "@/components/MUI";
import { style } from "@/config";
import { PATH } from "@/config/routes";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
// import { loginUser } from "@/slices/auth/authThunk";
// import { makeStore } from "@/state/store";
import { useTranslation } from "react-i18next";
import { adminLoginApi } from "@/api/auth/actions";
import { useDispatch } from "react-redux";
import { login } from "@/slices/auth/authReducers";
import { useState } from "react";

const AdminLogin = () => {
   const [form] = Form.useForm();
   const router = useRouter();
   const { t } = useTranslation();
   const [loading, setLoading] = useState(false);

   const dispatch = useDispatch();

   const handleSubmit = (values) => {
      adminLoginApi({
         username: values.username,
         password: values.password,
      })
         .then((res: any) => {
            dispatch(login(res?.content.token));
            setLoading(false);
         })
         .finally(() => {
            router.push(PATH.PORTAL);
            setLoading(false);
         });
      // makeStore.dispatch(loginUser({ username: values.username, password: values.password }));
   };

   return (
      <MUIBox
         sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontFamily: "Montserrat",
            fontWeight: "600",
         }}
      >
         <MUIBox
            sx={{
               border: "2px solid #000000",
               borderRadius: "10px",
               p: "15px 50px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               textAlign: "center",
               color: "#ffffff",
            }}
         >
            <MUITypography
               sx={{
                  fontSize: "30px",
                  fontWeight: "inherit",
                  m: "5px",
                  textAlign: "center",
                  color: style.TEXT_COLOR_TITLE,
                  fontFamily: "inherit",
               }}
            >
               HAISAM ADMIN
            </MUITypography>
            <MUIBox
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  ".MuiTextField-root": {
                     my: "10px",
                  },
                  ".MuiInputBase-root": {
                     fontFamily: "inherit",
                     color: style.TEXT_COLOR_NORMAL,
                  },
                  ".MuiBox-root": {
                     display: "flex",
                     justifyContent: "center",
                     ".MuiButtonBase-root": {
                        m: "10px",
                        fontWeight: "500",
                        color: "#ffffff",
                        backgroundColor: style.TEXT_COLOR_TITLE,
                        fontFamily: "inherit",
                        textTransform: "none",
                     },
                  },
                  ".Mui-error": {
                     fontWeight: "500",
                     color: `${style.TEXT_COLOR_ERROR} !important`,
                     fontSize: "14px",
                     display: "flex",
                     alignItems: "center",
                     mt: "10px",
                  },
                  ".Mui-error svg": {
                     fontSize: "20px",
                  },
                  ".ant-btn": {
                     m: "10px",
                     fontWeight: "500",
                     color: "#ffffff",
                     backgroundColor: style.TEXT_COLOR_TITLE,
                     fontFamily: "inherit",
                     textTransform: "none",
                  },
               }}
            >
               <Form form={form} onFinish={handleSubmit}>
                  <Form.Item name="username">
                     <Input size="large" placeholder={t("username")} />
                     {/* <MUITextField
                        color="primary"
                        variant="outlined"
                        size="small"
                        label="Tên người dùng"
                        type="text"
                        name="username"
                     /> */}
                  </Form.Item>
                  <Form.Item name="password">
                     {/* <MUITextField variant="outlined" size="small" label="Mật khẩu" type="password" name="password" /> */}
                     <Input size="large" type="password" placeholder={t("password")} />
                  </Form.Item>
                  <MUIBox>
                     <Button
                        loading={loading}
                        onClick={() => {
                           setLoading(true);
                           form.submit();
                        }}
                        type="primary"
                     >
                        {t("login")}
                     </Button>
                  </MUIBox>
               </Form>
            </MUIBox>
         </MUIBox>
      </MUIBox>
   );
};

export default AdminLogin;
