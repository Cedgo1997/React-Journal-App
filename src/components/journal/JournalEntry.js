import React from 'react';

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://media.cdnandroid.com/26/0e/f3/c8/imagen-the-spider-man-homecoming-app-0thumb.jpeg)',
				}}
			></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Titulo</p>
				<p className='journal__entry-content'>
					Do voluptate non do excepteur velit sit.
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
