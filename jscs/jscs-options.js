/**
 * Настройки стиля кодирования для JSCS.
 *
 * @link https://github.com/mdevils/node-jscs
 *
 * @author MaximAL
 * @since 2014-08-19
 * @copyright © MaximAL, Sijeko 2014
 * @link http://maximals.ru
 * @link http://sijeko.ru
 */
module.exports = {
	// "preset": "sijeko",
	
	// Использовать фигурные скобки для ключевых слов
	"requireCurlyBraces": [
		"if",
		"else",
		"for",
		"while",
		"do",
		"switch",
		"try",
		"catch"
	],
	
	// Пробел после ключевых слов обязателен
	"requireSpaceAfterKeywords": [
		"if",
		"else",
		"for",
		"while",
		"do",
		"switch",
		"case",
		"try",
		"catch",
		"return"
	],
	
	// Условное выражение (тернарный оператор)
	"requireSpacesInConditionalExpression": true,


	//// Функции. Скобки и пробелы
	"requireSpacesInFunctionDeclaration": {
		"beforeOpeningCurlyBrace": true
	},
	
	"disallowSpacesInFunctionDeclaration": {
		"beforeOpeningRoundBrace": true
	},
	
	"requireSpacesInAnonymousFunctionExpression": {
		"beforeOpeningRoundBrace": true,
		"beforeOpeningCurlyBrace": true
	},
	
	"requireSpacesInNamedFunctionExpression": {
		"beforeOpeningCurlyBrace": true
	},

	"disallowSpacesInNamedFunctionExpression": {
		"beforeOpeningRoundBrace": true
	},


	//// Скобки и операторы
	// Пробелы внутри круглых скобок запрещены
	"disallowSpacesInsideParentheses": true,
	
	// Имена ключей в кавычки не заключаются
	"disallowQuotedKeysInObjects": true,
	
	// Пробел после ключа объекта запрещён (сразу двоеточие)
	"disallowSpaceAfterObjectKeys": true,
	
	// Унарные операторы пишутся слитно с операндами
	"disallowSpaceAfterPrefixUnaryOperators": true,
	"disallowSpaceBeforePostfixUnaryOperators": true,
	
	// Бинарные операторы
	//"requireSpaceBeforeBinaryOperators": true,
	//"requireSpaceAfterBinaryOperators": true,
	"disallowSpaceBeforeBinaryOperators": [
		","
	],
	
	//// Идентификаторы и литералы
	// Идентификаторы кемелКейсом, ПРОПИСНЫМИ_БУКВАМИ или, если это свойства, можно с_подчёркиванием.
	"requireCamelCaseOrUpperCaseIdentifiers": "ignoreProperties",
	//"requireCamelCaseOrUpperCaseIdentifiers": true,
	
	// Многострочные строки (через \) запрещены, использовать конкатенацию (+)
	"disallowMultipleLineStrings": true,
	
	// Для строк используется одинарная кавычка, можно использовать двойную, если внутри строки есть одинарные
	"validateQuoteMarks": {
		"mark": "\'",
		"escape": true
	},
	
	// Конструктор начинается с Прописной буквы
	"requireCapitalizedConstructors": true,


	//// Отступы и табуляция
	// Используется смарт-табуляция, пустые символы в конце строк запрещены, в конце файла должна быть пустая строка
	"validateIndentation": "\t",
	"disallowMixedSpacesAndTabs": "smart",
	"disallowTrailingWhitespace": true,
	"requireLineFeedAtFileEnd": true,
	
	// Максимальная длина строки — 140 символов, символ табуляции считается за 4 пробела,
	// длинные ссылки в комментариях и длинные регулярные выражения могут превышать лимит
	"maximumLineLength": {
		"value": 140,
		"tabSize": 4,
		"allowComments": false,
		"allowUrlComments": true,
		"allowRegex": true
	},


	//// JsDoc
	// Комментарии к функциям, классам и т.п. пишутся в формате JsDoc.
	// Параметры функций должны совпадать с их доками, лишние параметры в доках запрещены, типы параметров обязательны
	"jsDoc": {
		"checkParamNames": true,
		"checkRedundantParams": true,
		"requireParamTypes": true
	},


	//// Блоки
	// Пробел перед открывающей фигурной скобкой обязателен
	"requireSpaceBeforeBlockStatements": true,
	
	// Множественное объявление запрещено
	"disallowMultipleVarDecl": true,

	// Блок начинается с новой строки
	"requireBlocksOnNewline": true,

	// Пустые блоки запрещены
	"disallowEmptyBlocks": true,
	
	// Ставить открывающую фигурную скобку на новую строку запрещено
	"disallowNewlineBeforeBlockStatements": true
}
