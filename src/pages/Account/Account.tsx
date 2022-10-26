import { useUserAuth } from 'providers/AuthProvider'

const Account = () => {
	const { user } = useUserAuth()
	return <div>{user?.email}</div>
}

export default Account
