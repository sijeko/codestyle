/**
 * Стиль кодирования Sijeko для Яваскрипта
 *
 **/

/* global module */
module.exports = {
	// Браузер
	// ECMAScript6
	"env": {
		"browser": true,
		"es6": true
	},
	// Расширяет рекомендованный стиль ESLint
	"extends": "eslint:recommended",
	// Файлы считаются ECMAScript-модулями
	"parserOptions": {"sourceType": "module"},

	// Правила
	"rules": {
		// Смарт-табуляция
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

		// КемелКейс
		"camelcase": "error",

		// Использовать фигурные скобки (if, else, …), короткие конструкции запрещены
		"curly": "error",
		"dot-notation": "error",
		// Обязательно === и !==
		"eqeqeq": "error",
		// Проверка hasOwnProperty внутри for in
		"guard-for-in": "error",
		// Запрет использования arguments.caller и arguments.callee
		"no-caller": "error",
		// Не использовать else после return внутри if
		"no-else-return": "error",
		// Пустые функции без комментариев запрещены
		"no-empty-function": "error",
		// Не использовать пустые паттерны при деструктуризации
		"no-empty-pattern": "error",
		// Всегда использовать break внутри case
		"no-fallthrough": "error",
		// Не присваивать ничего нативным глобальным переменным
		"no-global-assign": "error",
		// Нельзя присваивать объект самому себе
		"no-self-assign": "error",
		// Ненужные return запрещены
		"no-useless-return": "error",

		// Несколько пробелов подряд не в целях выравнивания, как правило, являются ошибкой
		"no-multi-spaces": "error",

		// Запятые
		"comma-spacing": "error",
		"comma-style": "error",
		// Пробел при вызове функции запрещён
		"func-call-spacing": "error",

		// Пробелы в конце строк запрещены
		"no-trailing-spaces": "error",

		// Одна переменная на var, один var на строку
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "error",

		// Обязательные JSDoc
		"require-jsdoc": "error",

		// Точки с запятой: обязательны, без пробела перед ними, последние в строке
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": ["error", "last"],

		// Пробелы перед блоками {}
		"space-before-blocks": "error",
		// Пробелы перед скобками в анонимных функциях
		// В именованных функциях не ставить
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],

		// Пробелы после открывающей и перед закрывающей скобками запрещены: (а + б)
		"space-in-parens": ["error"],
		// Пробелы вокруг операторов обязательны: а + б, не а+б
		"space-infix-ops": "error",

		// Пробел в switch/case только после двоеточия
		"switch-colon-spacing": ["error"],
		// Дублирование case с одинаковыми значениями запрещено
		"no-duplicate-case": "error",

		// Пробелы вокруг ключевых слов (if, switch, …) обязательны
		"keyword-spacing": "error",
		// Пробелы в ключах перед двоеточием не нужны, после двоеточия обязательны
		"key-spacing": "error",

		// Перед блочным комментарием обязательна пустая строка
		"lines-around-comment": ["error", {"beforeBlockComment": true}],

		// Больше одной инструкции на строку нельзя
		"max-statements-per-line": ["error", {max: 1}],

		// Запретить использование необъявленных переменных, если они не упомянуты
		// в комментариях /*global */
		"no-undef": "error",
		// Неиспользуемые переменные запрещены
		"no-unused-vars": "error",
		// Максимальная длина строки: предупреждение
		// Для кода: 120 символов
		// Не учитываем длинные ссылки, длинные строки, литералы шаблонов и регвыров
		"max-len": ["warn", {
			code: 120,
			tabWidth: 4,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}],
		// Линуксовый стиль конца строки
		"linebreak-style": ["error", "unix"],
		// Одинарные кавычки
		"quotes": ["error", "single"]
	}
};
