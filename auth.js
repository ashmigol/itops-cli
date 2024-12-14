// Импортируем библиотеку googleapis
const { google } = require('googleapis');
const path = require('path');

// Функция для получения аутентификации
async function auth() {
  // Создаем объект аутентификации с использованием Service Account
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'service-account.json'), // Путь к JSON-файлу
    scopes: [
      'https://www.googleapis.com/auth/admin.directory.group.readonly',
      'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
    ], // Области доступа для работы с группами, добавляем скопы по мере увеличения функционала cli
  });

  // Возвращаем клиента аутентификации
  return auth.getClient();
}

module.exports = auth;
