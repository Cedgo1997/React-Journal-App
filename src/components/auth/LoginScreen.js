import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm.';

export const LoginScreen = () => {
	const [{ email, password }, handleInputChange, reset] = useForm({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login(123, 'César'));
		reset();
	};

	return (
		<>
			<h3 className='auth__title'>Login</h3>
			<form onSubmit={handleLogin}>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					value={email}
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={handleInputChange}
				/>
				<button className='btn btn-primary btn-block' type='submit'>
					Login
				</button>
				<hr />

				<div className='auth__social-networks'>
					<p>Login with social networks</p>
					<div className='google-btn'>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
					<Link className='link' to='/auth/register'>
						Create new Account
					</Link>
				</div>
			</form>
		</>
	);
};
