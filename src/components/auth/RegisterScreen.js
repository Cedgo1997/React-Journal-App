import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.';

export const RegisterScreen = () => {
	const [{ name, email, password, password2 }, handleInputChange, reset] =
		useForm({
			name: '',
			email: '',
			password: '',
			password2: '',
		});

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(name, email, password, password2);
		reset();
	};

	const isFormValid = () => {};

	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={handleRegister}>
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					value={email}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					onChange={handleInputChange}
					value={password}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm Password'
					name='password2'
					onChange={handleInputChange}
					value={password2}
				/>
				<button
					className='btn btn-primary btn-block mt-1'
					type='submit'
				>
					Sign In
				</button>
				<Link className='link' to='/auth/login'>
					Already registered? Login.
				</Link>
				<hr />
			</form>
		</>
	);
};
