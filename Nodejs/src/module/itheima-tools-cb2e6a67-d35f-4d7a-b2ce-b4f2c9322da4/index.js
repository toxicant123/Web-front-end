/**
 *
 * @param {Date} date
 * @return {string}
 */
function dateFormat(date) {
    const y = date.getFullYear()
    const m = padZero(date.getMonth() + 1)
    const d = padZero(date.getDate())

    const hh = padZero(date.getHours())
    const mm = padZero(date.getMinutes())
    const ss = padZero(date.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

/**
 *
 * @param {number} n
 * @return {string}
 */
function padZero(n) {
    return n > 9 ? n : '0' + n
}

/**
 *
 * @param {string} htmlStr
 * @return {string}
 */
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, match => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

/**
 *
 * @param {string} str
 * @return {string}
 */
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnEscape
}
