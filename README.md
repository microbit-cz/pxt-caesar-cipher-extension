# Caesarova šifra

## Namespace
```
cipher
```
## Popis
Rozšíření poskytuje čtyři metody pro zašifrování a dešifrování textu/znaku pomocí Caesarovy šifry s libovolným posunem. Z důvodu jednoduššího překladu rozšíření pracuje pouze s anglickou abecedou, je ale schopno přeložit diakritiku na znak bez diakritiky. Pokud ovšem zadáme jakýkoli jiný znak (číslice, speciální znaky), znak se nepřeloží a zůstane tak, jak je.

Do bloků, které zašifrují/dešifrují znak je sice možné zadat víceznakový text, avšak rozšíření vždy vezme pouze první znak.
 
## Metody
### Zašifruj text %text caesarovou šifrou s posunem %key
```
function encryptText(text: string, key: number): string
```
- Zašiftuje zadaný text caesarovou šifrou s libovolným posunem
- Parametry:
    - text k zašifrování (text)
    - klíč (posun) - může být kladný i záporný (číslo)
- Návratová hodnota: zašifrovaný text (text)

### Dešifruj text %text caesarovou šifrou s posunem %key
```
function decryptText(text: string, key: number): string
```
- Dešiftuje zadaný text caesarovou šifrou s libovolným posunem
- Parametry:
    - text k dešifrování (text)
    - klíč (posun) - může být kladný i záporný (číslo)
- Návratová hodnota: dešifrovaný text (text)

### Zašifruj znak %character caesarovou šifrou s posunem %key
```
function encryptCharacter(character: string, key: number): string
```
- Zašiftuje zadaný znak caesarovou šifrou s libovolným posunem
- Parametry:
    - text k zašifrování (text)
    - klíč (posun) - může být kladný i záporný (číslo)
- Návratová hodnota: zašifrovaný znak (text)
#### Dešifruj znak %character caesarovou šifrou s posunem %key
```
decryptCharacter(character: string, key: number): string
```
- Dešiftuje zadaný znak caesarovou šifrou s libovolným posunem
- Parametry:
    - text k dešifrování (text)
    - klíč (posun) - může být kladný i záporný (číslo)
- Návratová hodnota: dešifrovaný znak (text)

## Příklady

### Použití metod pro zašifrování a dešifrování textu

#### Bloky
![Použití metod z rozšíření](https://github.com/microbit-cz/pxt-caesar-cipher-extension/blob/master/images/usageexample.png)
#### Kód
```
basic.showString(cipher.encryptText("ahoj", -2))
basic.showString(cipher.decryptText("fmto", 5))
```
Demo  [https://github.com/microbit-cz/pxt-caesar-cipher-demo-easy](https://github.com/microbit-cz/pxt-caesar-cipher-demo-easy)


### Použití metod pro zašifrování a dešifrování znaku
#### Bloky
![Použití vytvoření funkce](https://github.com/microbit-cz/pxt-caesar-cipher-extension/blob/master/images/usageexample2.png)
![Zašifrování](https://github.com/microbit-cz/pxt-caesar-cipher-extension/blob/master/images/encode.png)
![Dešifrofání](https://github.com/microbit-cz/pxt-caesar-cipher-extension/blob/master/images/decode.png)

#### Kód
```
function Zasifruj (text: string, posun: number) {
    for (let i = 0; i <= text.length - 1; i++) {
        konecnyText = "" + konecnyText + cipher.encryptCharacter(text.charAt(i), posun)
    }
    return konecnyText
}
function Desifruj (text: string, posun: number) {
    for (let j = 0; j <= text.length - 1; j++) {
        konecnyText = "" + konecnyText + cipher.decryptCharacter(text.charAt(j), posun)
    }
    return konecnyText
}
let konecnyText = ""
basic.showString("" + (Zasifruj("microbit", 5)))
```
Demo  [https://github.com/microbit-cz/pxt-caesar-cipher-demo-hard](https://github.com/microbit-cz/pxt-caesar-cipher-demo-hard)

