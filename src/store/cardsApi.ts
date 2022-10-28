import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICard } from '@/shared/types/cardTypes'

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
		headers: {
			'X-RapidAPI-Key': 'b5ba923c10mshbd3aa1eab6010e2p14b58bjsna1f39361b450',
			'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
		},
	}),
	endpoints: (build) => ({
		getCardsByClass: build.query({
			query: (heroClass) => ({
				method: 'GET',
				url: `cards/classes/${heroClass}`,
				contentType: 'application/json',
				headers: {
					'X-RapidAPI-Key':
						'b5ba923c10mshbd3aa1eab6010e2p14b58bjsna1f39361b450',
					'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
				},
			}),
			transformResponse(
				response: any //types(!**)
			) {
				return response.filter((el: ICard) => el.img)
			},
		}),
	}),
})

export const { useGetCardsByClassQuery } = cardsApi
