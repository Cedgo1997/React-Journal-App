import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const [{ name, email, password, password2 }, handleInputChange, reset] =
		useForm({
			name: '',
			email: '',
			password: '',
			password2: '',
		});

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log(name, email, password, password2);
			reset();
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required.'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid.'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(
				setError('Password should be at least 6 characters and match.')
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			{msgError && <p style={{ color: 'red', textAlign: 'center' }}>{msgError}</p>}
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
