import { useUserAuth } from 'providers/AuthProvider'
import { toastr } from 'react-redux-toastr'
import { Navigate } from 'react-router-dom'

interface IAuthContextProps {
	children: JSX.Element
}

export const ProtectedRoute = ({ children }: IAuthContextProps) => {
	const { user } = useUserAuth()
	if (!user) {
		toastr.error('Please', 'Register')
		return <Navigate to="/register" />
	}

	return children
}
