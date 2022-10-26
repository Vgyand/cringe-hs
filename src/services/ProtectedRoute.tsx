import { useUserAuth } from 'providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

interface IAuthContextProps {
	children: JSX.Element
}

export const ProtectedRoute = ({ children }: IAuthContextProps) => {
	const { user } = useUserAuth()
	const navigate = useNavigate()

	if (!user) {
		navigate('/login')
		return null
	}

	return children
}
