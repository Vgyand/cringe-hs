import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HistoryState {
	heroClass?: string
	filteredSearch?: string
	cost?: string | undefined
	health?: string
	attack?: string
}

const historySlice = createSlice({
	name: 'history',
	initialState: [] as HistoryState[],
	reducers: {
		addedToHistory(state, action: PayloadAction<HistoryState>) {
			state.push(action.payload)
		},
	},
})

export const { addedToHistory } = historySlice.actions
export const history = historySlice.reducer
