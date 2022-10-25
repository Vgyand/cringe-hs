// Запара с ts (!**)
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { FC, createContext, useContext, useEffect, useState } from 'react'

import { auth } from '../config/base'

const UserContext = createContext<any>('')
interface IAuthTypesContext {
	children: JSX.Element
}

export const AuthContextProvider: FC<IAuthTypesContext> = ({ children }) => {
	const [user, setUser] = useState()

	const createUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password)
		//Кривые типы(!*)
	}

	const signIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password)
		//Кривые типы(!*)
	}

	const logout = () => {
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
			console.log(currentUser)
			setUser(currentUser)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<UserContext.Provider value={{ createUser, user, logout, signIn }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(UserContext)
}
