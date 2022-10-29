import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import { cardsApi } from './cardsApi'
import { reducers } from './rootReducert'

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cardsApi.middleware),
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
