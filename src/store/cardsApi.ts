import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Card, SearchStateTypes } from '@/shared/types/cardTypes'

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
	}),
	endpoints: (build) => ({
		getCardsByQuery: build.query({
			query: (searchState: SearchStateTypes) => {
				let params = {}
				if (searchState.search && searchState.cost) {
					params = {
						locale: 'enUs',
						collectible: '1',
						cost: searchState.cost,
					}
				} else {
					params = {
						locale: 'enUs',
						collectible: '1',
					}
				}
				return {
					method: 'GET',
					url: `cards${
						searchState.search
							? `/search/${searchState.search}`
							: `${
									searchState.heroClass
										? `/classes/${searchState.heroClass}`
										: '/classes/neutral'
							  }`
					}`,
					contentType: 'application/json',
					params: params,
					headers: {
						'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
						'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
					},
				}
			},
			transformResponse(
				response: any //types(!**)
			) {
				return response.filter((el: Card) => el.img && el.cardSet === 'Core')
			},
		}),
	}),
})

export const { useGetCardsByQueryQuery } = cardsApi
