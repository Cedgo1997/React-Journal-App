import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
				/>
				<textarea
					placeholder='What happened today'
					className='notes__textarea'
				></textarea>
				<div className='notes__image'>
					<img
						src='https://media.cdnandroid.com/26/0e/f3/c8/imagen-the-spider-man-homecoming-app-0thumb.jpeg'
						alt='pic'
					/>
				</div>
			</div>
		</div>
	);
};
