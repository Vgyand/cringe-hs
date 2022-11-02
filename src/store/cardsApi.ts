import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Card, SearchStateTypes } from '@/shared/types/cardTypes'

interface ParamsType {
	locale: string
	collectible: string
	cost?: string
	health?: string
	attack?: string
}

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
	}),
	endpoints: (build) => ({
		getCardsByQuery: build.query({
			query: (searchState: SearchStateTypes) => {
				const params: ParamsType = {
					locale: 'enUs',
					collectible: '1',
				}
				console.log(searchState.search, searchState.cost)
				if (searchState.cost) params.cost = searchState.cost
				if (searchState.attack) params.attack = searchState.attack
				if (searchState.health) params.health = searchState.health
				console.log(params)
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
			transformResponse(response: any) {
				return response.filter(
					(el: Card) =>
						el.img &&
						(el.cardSet === 'Core' ||
							el.cardSet === 'Knights of the Frozen Throne' ||
							el.cardSet === 'The Grand Tournament' ||
							el.cardSet === 'League of Explorers' ||
							el.cardSet === 'The Boomsday Project')
				)
			},
		}),
	}),
})

export const { useGetCardsByQueryQuery } = cardsApi
