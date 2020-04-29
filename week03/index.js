function convertNumberToString(number, type) {
    let integer = Math.floor(number)
    let fraction = number - integer
    let string = ''
    const sixMap = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' }

    while (integer > 0) {
        let curNode = integer % type
        if (curNode < 10) {
            string = curNode + string
        } else {
            string = sixMap[curNode] + string
        }
        integer = Math.floor(integer / type)
    }

    if (fraction === 0) {
        return string
    }

    string = string + '.'

    while (fraction > Number.EPSILON) {
        fraction = fraction * type
        let curNode = Math.floor(fraction)
        if (curNode > 9) {
            string = string + sixMap[curNode]
        }
        string = string + curNode
        fraction = fraction - Math.floor(fraction)
    }

    return string
}

function convertStringToNumber(str) {
    let dotAfterLen = 0
    if (str.length !== str.split('.')[0].length) {
        dotAfterLen = str.split('.')[1].length
    }

    let chars = str.split('')
    let resNumber = 0

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '.') {
            continue
        }
        resNumber = resNumber * 10
        resNumber += chars[i].codePointAt(0) - '0'.codePointAt(0)
    }

    return resNumber / 10 ** dotAfterLen
}