export function isAlphabet(str: string) {
    if (str.length === 0) return undefined;
    var exp = /^[a-zA-Z]/;
    if (str.charAt(0).match(exp)) {
        return true;
    } else {
        return false;
    }
}