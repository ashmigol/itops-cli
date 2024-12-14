// Импортируем библиотеки
const fetch = require('node-fetch'); // Для выполнения HTTP-запросов
const secrets = require('../secrets'); // Импортируем файл с секретами

// Функция для валидации пользователей из Google Sheets
async function validateUsers(sheetId) {
  // URL конечной точки для выполнения запроса
  const url = 'https://us-central1-gam-project-2e5-3r0-7nb.cloudfunctions.net/email-status-gcf';

  // Заголовки запроса
  const headers = {
    'Authorization': `Bearer ${secrets.AUTH_BEARER_TOKEN}`, // Токен авторизации из файла секретов
    'Content-Type': 'application/json',
  };

  // Тело запроса
  const body = JSON.stringify({
    sheet_id: sheetId,
  });

  try {
    // Выполняем POST-запрос
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    // Проверяем статус ответа
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Получаем текстовый ответ
    const responseText = await response.text();
    console.log('Validation result (raw text):', responseText);
  } catch (error) {
    // Обработка ошибок
    console.error('Error validating users:', error.message);
  }
}

module.exports = validateUsers;
