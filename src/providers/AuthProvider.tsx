import {
	User,
	UserCredential,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { FC, createContext, useContext, useEffect, useState } from 'react'

import { auth } from '../config/base'

export interface AuthContextModel {
	user: User | null
	createUser: (email: string, password: string) => Promise<UserCredential>
	signIn: (email: string, password: string) => Promise<UserCredential>
	logout: () => Promise<void>
}

const UserContext = createContext<AuthContextModel>({} as AuthContextModel)

interface IAuthTypesContext {
	children: JSX.Element
}

export const AuthContextProvider: FC<IAuthTypesContext> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)

	const createUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser)
			setUser(currentUser)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<UserContext.Provider value={{ createUser, user, signIn, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserAuth = () => {
	return useContext(UserContext)
}
