import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();

	const { active: note } = useSelector(state => state.notes)

	const handleSave = () => {
		dispatch(startSaveNote(note));
	};

	const handleUploadPicture = () => {
		document.querySelector('#fileSelector').click();
	}

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file));
		}

	}

	return (
		<div className='notes__appbar'>
			<input id='fileSelector' name='file' type='file' accept='image/*' style={{ display: 'none' }} onChange={handleFileChange} />
			<span>{moment(note.date).format('LL')}</span>
			<div>
				<button className='btn' onClick={handleUploadPicture}>Picture</button>
				<button className='btn' onClick={handleSave}>Save</button>
			</div>
		</div>
	);
};
