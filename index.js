#!/usr/bin/env node
// Импортируем библиотеку commander для создания интерфейса CLI
const { Command } = require('commander');

// Создаем объект программы (основной CLI)
const program = new Command();

// Импортируем команды для обработки задач
const addToGroup = require('./commands/addToGroup.js'); // Добавление пользователя в группу
const listGroupMembers = require('./commands/listGroupMembers.js'); // Вывод участников группы
const listUserGroups = require('./commands/listUserGroups.js'); // Вывод групп пользователя
const validateUsers = require('./commands/validateUsers.js'); // Проверка пользователей в системе



// Настраиваем базовую информацию о CLI
program
  .name('itops') // Название CLI-инструмента
  .description('CLI tool for Admin tasks') // Описание, отображаемое в справке
  .version('1.0.0'); // Текущая версия CLI

// Определяем команду addToGroup
program
  .command('add-to-group <userEmail> <groupEmail>') // Аргументы: email пользователя и группы
  .description('Add a user to a group') // Описание команды
  .action((userEmail, groupEmail) => { // Действие при вызове команды
    addToGroup(userEmail, groupEmail); // Вызов функции addToGroup
  });

// Определяем команду listGroupMembers
program
  .command('list-group-members <groupEmail>') // Аргумент: email группы
  .description('List members of a group') // Описание команды
  .action((groupEmail) => { // Действие при вызове команды
    listGroupMembers(groupEmail); // Вызов функции listGroupMembers
  });

// Определяем команду listUserGroups
program
  .command('list-user-groups <userEmail>') // Аргумент: email пользователя
  .description('List groups of a user') // Описание команды
  .action((userEmail) => { // Действие при вызове команды
    listUserGroups(userEmail); // Вызов функции listUserGroups
  });

// Определяем команду validateUsers
program
  .command('validate-users <sheetID>') // Аргумент ID списка пользователей
  .description('Validate users in the system') // Описание команды
  .action((sheetID) => { // Действие при вызове команды
    validateUsers(sheetID); // Вызов функции validateUsers
  });

// Парсим аргументы командной строки и запускаем соответствующую команду
program.parse(process.argv);