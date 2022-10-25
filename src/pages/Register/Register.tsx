import { UserAuth } from 'providers/AuthProvider'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import { IAuthTypes } from '@/shared/types/authTypes'

import styles from './Register.module.scss'

const Register: FC = () => {
	const { createUser } = UserAuth()
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthTypes>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<IAuthTypes> = async (data) => {
		try {
			await createUser(data.email, data.password)
			toastr.success('User has been registered', `${data.email}`)
			navigate('/')
		} catch (e) {
			toastr.error('Error', `Email is already used`)
		}
	}

	return (
		<div className={styles.register}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className="text-white text-3xl mx-auto">Register</h1>
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
							minLength: {
								value: 6,
								message: 'Password is not hard enough',
							},
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

export default Register
