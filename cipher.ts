//% weight=100 color=#ff6601 icon="\uf023" block="Šifra"
namespace cipher {
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    /**
     * Zašiftuje zadaný text caesarovou šifrou s libovolným posunem
     * @text Text k zašifrování
     * @key Posun
     */
    //% block="Zašifruj text %text caesarovou šifrou s posunem %key"

    export function encryptText(text: string, key: number): string {
        let finalText = "";

        for (let i = 0; i < text.length; i++) {
            finalText += encryptCharacter(text[i], key)
        }
        return finalText;
    }

    /**
     * Dešiftuje zadaný text caesarovou šifrou s libovolným posunem
     * @text Text k dešifrování
     * @key Posun
     */
    //% block="Dešifruj text %text caesarovou šifrou s posunem %key"
    export function decryptText(text: string, key: number): string {
        let finalText = "";

        for (let i = 0; i < text.length; i++) {
            finalText += decryptCharacter(text[i], key)
        }
        return finalText;
    }

    /**
 * Zašiftuje zadaný znak caesarovou šifrou s libovolným posunem
 * @znak Znak k zašifrování
 * @key Posun
 */
    //% block="Zašifruj znak %character caesarovou šifrou s posunem %key"
    export function encryptCharacter(character: string, key: number): string {
        character = checkCharForDiacritics(character.toLowerCase()[0])
        let indexOfChar = characters.indexOf(character);
        if (indexOfChar != -1) {
            let finalIndex = indexOfChar + key;
            if (finalIndex >= characters.length) {
                finalIndex = finalIndex % characters.length;
            } else if (finalIndex < 0) {

                finalIndex = characters.length - ((-finalIndex) % (characters.length - 1));
            }
            serial.writeLine(characters[finalIndex % characters.length])

            return characters[finalIndex % characters.length];
        } else {
            return character;
        }

    }

    /**
     * Dešiftuje zadaný znak caesarovou šifrou s libovolným posunem
     * @znak Znak k dešifrování
     * @key Posun
     */
    //% block="Dešifruj znak %character caesarovou šifrou s posunem %key"
    export function decryptCharacter(character: string, key: number): string {
        character = checkCharForDiacritics(character.toLowerCase()[0])
        let indexOfChar = characters.indexOf(character);
        if (indexOfChar != -1) {
            let finalIndex = indexOfChar - key;
            if (finalIndex >= characters.length) {
                finalIndex = finalIndex % characters.length;
            } else if (finalIndex < 0) {

                finalIndex = characters.length - ((-finalIndex) % (characters.length - 1));
            }
            return characters[finalIndex % characters.length];
        } else {
            return character
        }

    }

    function removeDiacritics(text: string): string {
        let finalText = ""
        for (const element of text) {
            finalText += checkCharForDiacritics(element)
        }
        return finalText

    }

    function checkCharForDiacritics(char: string): string {
        let dict: any = {
            'á': 'a',
            'å': 'a',
            'ä': 'a',
            'â': 'a',
            'ą': 'a',
            'ā': 'a',
            'à': 'a',
            'ã': 'a',
            'ă': 'a',
            'ả': 'a',
            'ạ': 'a',
            'č': 'c',
            'ĉ': 'c',
            'ç': 'c',
            'ć': 'c',
            'ď': 'd',
            'đ': 'd',
            'é': 'e',
            'ě': 'e',
            'è': 'e',
            'ê': 'e',
            'ë': 'e',
            'ę': 'e',
            'ė': 'e',
            'ē': 'e',
            'ĝ': 'g',
            'ģ': 'g',
            'ǧ': 'g',
            'ĥ': 'h',
            'ȟ': 'h',
            'í': 'i',
            'î': 'i',
            'ï': 'i',
            'ķ': 'k',
            'ł': 'l',
            'ĺ': 'l',
            'ľ': 'l',
            'ň': 'n',
            'ņ': 'n',
            'ń': 'n',
            'ñ': 'n',
            'ó': 'o',
            'ø': 'o',
            'õ': 'o',
            'ö': 'o',
            'ô': 'o',
            'ő': 'o',
            'ơ': 'o',
            'ř': 'r',
            'ŕ': 'r',
            'š': 's',
            'ś': 's',
            'ș': 's',
            'ť': 't',
            'ț': 't',
            'ú': 'u',
            'ů': 'u',
            'ŭ': 'u',
            'ü': 'u',
            'ù': 'u',
            'û': 'u',
            'ų': 'u',
            'ū': 'u',
            'ű': 'u',
            'ư': 'u',
            'ý': 'y',
            'ÿ': 'y',
            'ž': 'z',
            'ź': 'z',
            'ż': 'z'
        };
        if (dict[char] != undefined) {
            return dict[char]
        }
        return char
    }

}
