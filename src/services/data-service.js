// Подключаем файл с исходными данными для приложения из Тестового задания
import json from "../../products";

export default class DataService {
  getData = () => {
    return new Promise((resolve, reject) => {

      // С помощью setTimeout имитируем асинхронную загрузку данных с сервера
      setTimeout(() => {
        resolve(json);
        reject(new Error('Ошибка. К сожалению, не удалось полуычить данные!'));
      }, 2000);
    });
  }
}