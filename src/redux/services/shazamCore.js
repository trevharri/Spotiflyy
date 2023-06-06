import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '05541f1779msha7ebfa5b74982ddp1c03b0jsn6b953d3a46de',
//         'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
// }
// const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world'

// fetch(url, options)
//     .then((res) => res.json())
//     .then((res) => console.log(err));
//     .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '05541f1779msha7ebfa5b74982ddp1c03b0jsn6b953d3a46de');
            
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}`}),
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;