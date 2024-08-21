import FETCH from "../fetch";

export const adminLoginApi = (body: any) =>
   FETCH({
      method: "POST",
      path: "/admin/authenticate",
      withToken: false,
      body: body,
   });

export const sendContact = (body: any) =>
   FETCH({
      method: "POST",
      path: "/admin/request-submit",
      withToken: false,
      body: body,
   });

export const getListNews = () =>
   FETCH({
      method: "GET",
      path: "/admin/news/get-list",
      withToken: false,
   });

export const createNews = (body: any, token: string | boolean) =>
   FETCH({
      method: "POST",
      path: "/admin/news/post",
      withToken: token,
      body: body,
   });

export const updateNew = (id: any, body: any, token: string | boolean) =>
   FETCH({
      method: "PUT",
      path: `/admin/news/update/${id}`,
      withToken: token,
      body: body,
   });

export const deleteNew = (id: any, token: string | boolean) =>
   FETCH({
      method: "DELETE",
      path: `/admin/news/deleted/${id}`,
      withToken: token,
   });

export const getDetailNew = (id: any) =>
   FETCH({
      method: "GET",
      path: `/admin/news/get-detail/${id}`,
      withToken: false,
   });

// export const uploadImage = (formData: FormData, token: string | boolean) =>
//    FETCH({
//       method: "POST",
//       path: `/admin/upload`,
//       withToken: token,
//       body: formData,
//    });
