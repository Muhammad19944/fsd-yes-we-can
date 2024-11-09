/**
 * Как минимум одна строчная буква
 * */
export const leastOneLowercase = /^(?=.*[a-z])/
/**
 * Как минимум одна заглавная буква
 * */
export const leastOneUppercase = /(?=.*[A-Z])/
/**
 * Как минимум одна цифра
 * */
export const leastOneNumeric = /(?=.*\d)/
/**
 * Общая длина не менее 8 символов,
 * состоящих из букв и цифр
 * */
export const minimum8Characters = /[A-Za-z\d]{8,}/
