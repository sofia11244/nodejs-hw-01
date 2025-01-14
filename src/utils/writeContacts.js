import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts successfully updated!');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
