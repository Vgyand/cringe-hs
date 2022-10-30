import { useUserAuth } from 'providers/AuthProvider'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import { AuthTypes } from '../../shared/types/authTypes'

import styles from './Login.module.scss'

const Login = () => {
	const { signIn } = useUserAuth()
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthTypes>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<AuthTypes> = async (data) => {
		try {
			await signIn(data.email, data.password)
			toastr.success('User has been succsesfully logged in', `${data.email}`)
			navigate('/')
		} catch (e: any) {
			if (e.code === 'auth/user-not-found') {
				toastr.error('Login or password error', 'User not found')
			}
		}
	}

	return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className="text-white text-3xl mx-auto">Login</h1>
				<label>
					Email
					<input
						{...register('email', {
							required: 'Is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address',
							},
						})}
						className={styles.formInput}
					/>
					{errors?.email && (
						<p className="text-primary">{errors.email.message}</p>
					)}
				</label>
				<label>
					Password
					<input
						{...register('password', {
							required: 'Is required',
						})}
						type="password"
						className={styles.formInput}
					/>
					{errors?.password && (
						<p className="text-primary">{errors.password.message}</p>
					)}
				</label>

				<input type="submit" className={styles.formBtn} />
			</form>
		</div>
	)
}

export default Login
