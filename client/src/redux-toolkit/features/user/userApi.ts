import { apiSlice } from "../api/apiSlice";
import { userLogin } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "/update-user-avatar",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    editProfile: builder.mutation({
      query: (data) => ({
        url: "/update-user-info",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    
    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "/update-user-password",
        method: "PUT",
        body: { oldPassword, newPassword },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdatePasswordMutation,
} = userApi;
