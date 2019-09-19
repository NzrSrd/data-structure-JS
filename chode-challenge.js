function SimpleSymbols(str) {
    if (str.length === 0) return false;

    if (isAlpha(str[0]) || isAlpha(str[str.length - 1])) {
        return false;
    }

    for ( let i = 0 ; i < str.length ; i++) {
        if(isAlpha(str[i])) {
            const regex = RegExp(`[+]${str[i]}[+]`);
            if(!regex.test(str)) {
                return false;
            }
        }
    }
    return true;
}

const isAlpha = (char) => {
    let code = char.charCodeAt(0);
    return !( !(code > 64 && code < 91) &&
        !(code > 96 && code < 123));
};

SimpleSymbols("+a=");