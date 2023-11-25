import {
  GET_ALL_REGISTERED_USERS_URL,
  REGISTER_USER_URL,
} from "@/constants/url";
import { api } from "@/redux/api/apiSlice";

const userProfileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `${REGISTER_USER_URL}`,
        method: "POST",
        body: data,
      }),
      //   invalidatesTags: ["userProfileData"],
    }),
  }),
});

export const { useUpdateUserProfileMutation } = userProfileApi;
