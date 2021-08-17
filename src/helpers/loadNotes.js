import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid) => {
	const notesSnap = await db.collection(`${uid}/journal/notes`).get();
	const notes = [];

	notesSnap.forEach((nChildren) => {
		notes.push({
			id: nChildren.id,
			...nChildren.data(),
		});
	});
	return notes;
};
