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
    htmlEscape,
    htmlUnEscape
}