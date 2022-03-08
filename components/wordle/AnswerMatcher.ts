import { answers } from "./const"

export const wordSuggest = (userInput: string) => {
    for (const answer of answers) {
        if (answer.startsWith(userInput)) {
            return answer;
        }
    }
    return ""
}

export const matcher = (word: string, answer: string) => {
    const wordArr = word.split("")
    const answerArr = answer.split("")
    const result = [
        "grey",
        "grey",
        "grey",
        "grey",
        "grey",
    ]
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === answerArr[i]) {
            result[i] = "green"
        } else if (answer.includes(wordArr[i])) {
            result[i] = "yellow"
        }
    }
    return result
}

function replaceElement(array: string[], before: string, after: string) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].replace(before, after);
    }
    return array;
}


export const resultMatcher = (wordList: string[], answer: string) => {
    let result = ""
    for (const word of wordList) {
        if (!word) break
        let r = matcher(word, answer)
        r = replaceElement(r, "grey", "⬜")
        r = replaceElement(r, "yellow", "🟨")
        r = replaceElement(r, "green", "🟩")
        result += `${r.join("")}\n`
    }

    return result
}

export const allMatcher = (wordList: string[], answer: string) => {
    const result = {
        "a": "none", "b": "none", "c": "none", "d": "none", "e": "none",
        "f": "none", "g": "none", "h": "none", "i": "none", "j": "none",
        "k": "none", "l": "none", "m": "none", "n": "none", "o": "none",
        "p": "none", "q": "none", "r": "none", "s": "none", "t": "none",
        "u": "none", "v": "none", "w": "none", "x": "none", "y": "none",
        "z": "none",
    } as any
    for (const word of wordList) {
        const wordArr = word.split("")
        const answerArr = answer.split("")
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] === answerArr[i]) {
                result[wordArr[i]] = "green"
            } else if (answer.includes(wordArr[i])) {
                if (result[wordArr[i]] === "none" || result[wordArr[i]] === "grey") {
                    result[wordArr[i]] = "yellow"
                }
            } else {
                if (result[wordArr[i]] === "none") {
                    result[wordArr[i]] = "grey"
                }
            }
        }
    }
    return result
}