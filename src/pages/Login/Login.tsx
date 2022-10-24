import { SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

import { FormValues } from '@/shared/types/formTypes'

import styles from './Login.module.scss'

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		mode: 'onBlur',
	})

	console.log(errors)

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		toastr.success('User has been autherized', `${data.login}`)
		//login function will be implemented
	}

	return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className="text-white text-3xl mx-auto">Login</h1>
				<label>
					Login
					<input
						{...register('login', {
							required: 'Is required',
							minLength: {
								value: 6,
								message: 'Min 6 symbols',
							},
						})}
						className={styles.formInput}
					/>
					{errors?.login && (
						<p className="text-primary">{errors.login.message}</p>
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

export default Login
