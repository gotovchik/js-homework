"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/
/**
 * Проверка на число
 *
 * @param {*} n
 * @return {boolean} true - если получили число.
 */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Выводит в консоль размер заработной платы за вычетом налогов
 *
 * @param {number} salaryBeforeTaxes - зарплата до вычета налогов
 */
function printSalaryWithoutTaxes(salaryBeforeTaxes) {
  const salary = salaryBeforeTaxes - (salaryBeforeTaxes / 100) * 13;
  console.log(`Размер заработной платы за вычетом налогов равен ${salary}.`);
}

const salary = prompt("Введите вашу зарплату:");
isNumeric(salary)
  ? printSalaryWithoutTaxes(salary)
  : console.log("Значение задано неверно");
