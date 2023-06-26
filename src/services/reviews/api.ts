import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export const reviewApi = createApi({
    reducerPath: 'reviews',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: builder => ({
        getReviews: builder.query<Review[], string>({ query: movieId => `reviews?movieId=${movieId}` }),
    }),
});

export const { useGetReviewsQuery } = reviewApi;
