const { google } = require('googleapis');
const auth = require('../auth'); // Импортируем модуль аутентификации


async function listUserGroups(userEmail) { 

    const admin = google.admin({ version: 'directory_v1', auth: await auth() });

    try { 
        const res = await admin.groups.list({ 
            userKey: userEmail
        });

        const groups = res.data.groups || []; // Получаем список групп

        if (groups.length === 0) {
            console.log(`User ${userEmail} is not a member of any groups.`);
        } else {
            console.log(`Groups of ${userEmail}:`);
            groups.forEach((group) => console.log(`- ${group.name}`))
        }
    } catch (error) {
        console.error('Error listing user groups:', error.response?.data || error.message);

    }
}

module.exports = listUserGroups;