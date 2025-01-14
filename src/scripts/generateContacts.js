import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);

    console.log(`Generated ${number} contacts`);
} catch (error) {
    console.error(error);
    throw error;
}
};

generateContacts(5);
