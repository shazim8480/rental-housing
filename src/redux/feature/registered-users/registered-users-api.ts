import {
  GET_ALL_REGISTERED_USERS_URL,
  REGISTER_USER_URL,
} from "@/constants/url";
import { api } from "@/redux/api/apiSlice";

const propertiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRegisteredUsers: builder.query({
      query: () => GET_ALL_REGISTERED_USERS_URL,
      providesTags: ["registeredUsers"],
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: `${REGISTER_USER_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["registeredUsers"],
    }),
  }),
});

export const { useGetRegisteredUsersQuery, useRegisterUserMutation } =
  propertiesApi;
