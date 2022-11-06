import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { toastr } from 'react-redux-toastr'

import { auth } from '../../config/base'

export const authProtection =
	() => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
		const actions = new Set()
		actions.add('favorites/addedToFavorite')
		actions.add('favorites/removedFromFavorite')
		const isAllowed = actions.has(action.type) && !auth.currentUser

		if (isAllowed) {
			toastr.error('Please', 'login')
			return null
		}
		next(action)
	}
