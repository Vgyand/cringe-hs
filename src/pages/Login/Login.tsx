import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

import styles from './Login.module.scss'

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const onSubmit = (data: any) => {
		toastr.success('User has been autherized', `${data.login}`)
	}

	return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<label>
					Login
					<input
						{...register('login', {
							required: true,
						})}
						className={styles.formInput}
					/>
				</label>
				<label>
					Password
					<input type="password" className={styles.formInput} />
				</label>
				<input type="submit" className={styles.formBtn} />
			</form>
		</div>
	)
}

export default Login
