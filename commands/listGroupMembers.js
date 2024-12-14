// Импортируем библиотеки
const { google } = require('googleapis');
const auth = require('../auth'); // Импортируем модуль аутентификации

// Функция для вывода участников группы
async function listGroupMembers(groupEmail) {
  // Создаем объект Admin SDK API
  const admin = google.admin({ version: 'directory_v1', auth: await auth() });

  try {
    // Запрос на получение списка участников группы
    const res = await admin.members.list({ groupKey: groupEmail });
    const members = res.data.members || []; // Получаем список участников

    console.log(`Members of ${groupEmail}:`);
    members.forEach((member) => console.log(`- ${member.email}`));
  } catch (error) {
    // Обработка ошибок
    console.error('Error listing group members:', error.response?.data || error.message);
  }
}

module.exports = listGroupMembers;
