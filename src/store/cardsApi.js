import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.hearthstonejson.com/v1/152904/enUS/',
	}),
	endpoints: (build) => ({
		getCards: build.query({
			query: () => ({
				url: `cards.json`,
				contentType: 'application/json',
			}),
			transformResponse(response) {
				return response.filter(
					(el) =>
						(el.type === 'SPELL' || el.type === 'MINION') &&
						el.cardClass === 'NEUTRAL'
				)
			},
		}),
	}),
})

export const { useGetCardsQuery } = cardsApi
