import { reducer as toastrReducer } from 'react-redux-toastr'

import { cardsApi } from './cardsApi'

export const reducers = {
	[cardsApi.reducerPath]: cardsApi.reducer,
	toastr: toastrReducer,
}
