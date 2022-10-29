import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICard } from '@/shared/types/cardTypes'

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
	}),
	endpoints: (build) => ({
		getCardsByQuery: build.query({
			query: (searchState: any) => ({
				method: 'GET',
				url: `cards${
					searchState.search
						? `/search/${searchState.search}`
						: `${
								searchState.heroClass
									? `/classes/${searchState.heroClass}`
									: '/classes/neutral'
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }`
				}`,
				contentType: 'application/json',
				params: {
					locale: 'enUS',
					collectible: '1',
				},
				headers: {
					'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
					'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
				},
			}),
			transformResponse(
				response: any //types(!**)
			) {
				return response.filter((el: ICard) => el.img && el.cardSet === 'Core')
			},
		}),
	}),
})

export const { useGetCardsByQueryQuery } = cardsApi
