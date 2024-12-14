// Импортируем библиотеки
const { google } = require('googleapis');
const auth = require('../auth'); // Импортируем модуль аутентификации

// Функция для добавления пользователя в группу
async function addToGroup(userEmail, groupEmail, role = 'MEMBER') {
  // Создаем объект Admin SDK API
  const admin = google.admin({ version: 'directory_v1', auth: await auth() });

  try {
    // Запрос на добавление пользователя в группу
    await admin.members.insert({
      groupKey: groupEmail, // Email группы
      requestBody: {
        email: userEmail, // Email пользователя
        role: role.toUpperCase(), 
      },
    });

    console.log(`User ${userEmail} successfully added to group ${groupEmail} with role ${role}`);
  } catch (error) {
    // Обработка ошибок
    console.error('Error adding user to group:', error.response?.data || error.message);
  }
}

module.exports = addToGroup;
