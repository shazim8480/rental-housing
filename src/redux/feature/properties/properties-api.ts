import {
  ADD_PROPERTY_URL,
  DELETE_PROPERTY_URL,
  GET_ALL_PROPERTIES_URL,
  GET_PROPERTY_BY_ID_URL,
  UPDATE_PROPERTY_BY_ID_URL,
} from "@/constants/url";
import { api } from "@/redux/api/apiSlice";

const propertiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => GET_ALL_PROPERTIES_URL,
      providesTags: ["properties"],
    }),
    getSingleProperty: builder.query({
      query: (id) => `${GET_PROPERTY_BY_ID_URL}/${id}`,
    }),
    addProperty: builder.mutation({
      query: (data) => ({
        url: `${ADD_PROPERTY_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["properties"],
    }),
    updateProperty: builder.mutation({
      query: ({ id, data }) => ({
        url: `${UPDATE_PROPERTY_BY_ID_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["properties"],
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `${DELETE_PROPERTY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["properties"],
    }),
    // postReview: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["reviews"],
    // }),
    // getReviews: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: [""],
    // }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetSinglePropertyQuery,
  useAddPropertyMutation,
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} = propertiesApi;
