import { useUserAuth } from 'providers/AuthProvider'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import { IProtectedType } from '../shared/types/authTypes'

const ProtectedRoute = ({ children }: IProtectedType) => {
	const navigate = useNavigate()

	const { user } = useUserAuth()
	if (!user) {
		toastr.error('You should be autherized', 'access error')
		navigate('/')
	}
	return children
}

export default ProtectedRoute
