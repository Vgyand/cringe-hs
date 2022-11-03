import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Card, SearchParamsTypes } from '@/shared/types/cardTypes'

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
			query: (searchState: SearchParamsTypes) => {
				const params: ParamsType = {
					locale: 'enUs',
					collectible: '1',
				}
				console.log(searchState.search, searchState.cost)
				if (searchState.cost) params.cost = searchState.cost
				if (searchState.attack) params.attack = searchState.attack
				if (searchState.health) params.health = searchState.health
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
					params,
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
						el.cardSet.includes(
							'Core' ||
								'The Grand Tournament' ||
								'The Boomsday Project' ||
								'League of Explorers' ||
								'Knights of the Frozen Throne'
						)
				)
			},
		}),
	}),
})

export const { useGetCardsByQueryQuery } = cardsApi
