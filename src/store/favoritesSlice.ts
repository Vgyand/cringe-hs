import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
	id: number
	img: string
	name: string
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: [] as FavoritesState[],
	reducers: {
		addedToFavorite(state, action: PayloadAction<FavoritesState>) {
			state.push(action.payload)
		},
		removedFromFavorite(state, action: PayloadAction<FavoritesState>) {
			const indexOfObject = state.findIndex((obj: FavoritesState) => {
				return obj.id === action.payload.id
			})

			state.splice(indexOfObject, 1)
		},
	},
})

export const { addedToFavorite, removedFromFavorite } = favoritesSlice.actions
export const favorite = favoritesSlice.reducer
