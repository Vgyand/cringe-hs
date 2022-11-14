import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Card, SearchParamsTypes } from '@/shared/types/cardTypes'

interface ParamsType {
	locale: string
	collectible: string
	cost?: string
	health?: string
	attack?: string
}

const cardSets = new Set()
cardSets.add('Core')

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
				if (searchState.cost) params.cost = searchState.cost
				if (searchState.attack) params.attack = searchState.attack
				if (searchState.health) params.health = searchState.health
				return {
					method: 'GET',
					url: `cards${
						searchState.filteredSearch
							? `/search/${searchState.filteredSearch}`
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
				return response.filter((el: Card) => el.img && cardSets.has(el.cardSet))
			},
		}),
		getCardByQuery: build.query({
			query: (searchState: SearchParamsTypes) => {
				const params: ParamsType = {
					locale: 'enUs',
					collectible: '1',
				}
				return {
					method: 'GET',
					url: `cards/${searchState.filteredSearch}`,
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
					(el: Card) => el.img && cardSets.has(el.cardSet)
				)[0]
			},
		}),
	}),
})

export const { useGetCardsByQueryQuery, useGetCardByQueryQuery } = cardsApi
