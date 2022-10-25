import { UserAuth } from 'providers/AuthProvider'
import { FC } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import { IProtectedType } from '../shared/types/authTypes'

const ProtectedRoute: FC<IProtectedType> = ({ children }) => {
	const navigate = useNavigate()

	const { user } = UserAuth()
	if (!user) {
		toastr.error('You should be autherized', 'access error')
		navigate('/')
	}
	return children
}

export default ProtectedRoute
