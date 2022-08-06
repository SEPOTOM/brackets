module.exports = function check(str, bracketsConfig) {
  let brackets = '';
  const bracketsPair = bracketsConfig.map((item) => item[0] + item[1]);

  for (let bracket of str) {
    brackets = brackets + bracket;

    bracketsPair.forEach((pair) => {
      if (brackets.endsWith(pair)) {
        brackets = brackets.slice(0, brackets.length - 2);
      }
    });
  }

  return brackets.length === 0;
}

//input: строка с скобками; массив с массивами, в которых находятся открывающая и зыкрывающая скобки
//output: true, если скобки в исходной строке расставлены правильно, иначе false

//*first-way
//1.Создать пустую строку
//2.Создать массив на основе исходного массива в котором будут хранится пары скобок
//3.Перебирать исходную строку, в конец строки (п.1) добавялть текущую скобку
//4.В переборе (п.4) перебирать массив (п.2), если строка (п.1) заканчивается элементом
//  массива, то из строки удаляются два последних символа
//5.Функция возвращает: равна ли длина строки (п.1) нулю