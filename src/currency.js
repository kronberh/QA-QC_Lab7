/**
 * @param {string} value
 * @returns {number}
 */
function parseCurrency(value) {
    return parseFloat(value.replace('$', ''));
}

/**
 * @param {number} value
 * @returns {string}
 */
function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

/**
 * @param {string} value1
 * @param {string} value2
 * @returns {string}
 */
function addCurrencies(value1, value2) {
    const num1 = parseCurrency(value1);
    const num2 = parseCurrency(value2);
    const sum = num1 + num2;
    return formatCurrency(sum);
}

module.exports = { parseCurrency, formatCurrency, addCurrencies };
