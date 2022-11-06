import { toastr } from 'react-redux-toastr'

import { auth } from '../../config/base'

export const AuthProtection = (store: any) => (next: any) => (action: any) => {
	if (
		action.type.includes(
			'favorites/addedToFavorite' || 'favorites/removedFromFavorite'
		) &&
		!auth.currentUser
	) {
		toastr.error('Please', 'login')
		return null
	}
	next(action)
}
