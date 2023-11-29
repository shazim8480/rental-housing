import { GET_USER_PROFILE_URL, USER_UPDATE_PROFILE_URL } from "@/constants/url";
import { api } from "@/redux/api/apiSlice";

const userProfileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: ({ userEmail }) => ({
        url: GET_USER_PROFILE_URL + "?email=" + userEmail,
        method: "GET",
      }),
      providesTags: ["userProfileData"],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_UPDATE_PROFILE_URL}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["userProfileData"],
    }),
  }),
});

export const { useUpdateUserProfileMutation, useGetUserProfileQuery } =
  userProfileApi;
