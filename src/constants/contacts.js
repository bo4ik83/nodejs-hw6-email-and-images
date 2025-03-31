import path from 'node:path';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { updateContact } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const contactTypesList = ['work', 'home', 'personal'];
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const photo = req.file;

  let photoUrl;

  if (photo) {
    photoUrl = await saveFileToUploadDir(photo);
  }

  const result = await updateContact(contactId, {
    ...req.body,
    photo: photoUrl,
  });

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: updateContact,
  });
};
