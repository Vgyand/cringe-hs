import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducert'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
