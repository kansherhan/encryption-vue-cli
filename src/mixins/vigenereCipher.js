export default {
    methods: {
        videnereEncrypt(data) {
            return this.videnereCipher(data, function (textCode, keyCode) {
                return String.fromCharCode(((textCode + keyCode) % 26) + 65);
            });
        },
        videnereDencrypt(data) {
            return this.videnereCipher(data, function (textCode, keyCode) {
                let code = textCode - keyCode;

                if (code < 0) {
                    code = code + 26;
                }

                return String.fromCharCode(code + 65);
            });
        },
        videnereCipher(data, normalizer) {
            let text = data.text.toUpperCase();
            let key = data.key.toUpperCase();

            let keyCount = Math.ceil(text.length / key.length);
            let keyText = key.repeat(keyCount).substr(0, text.length);
            let output = "";

            for (let i = 0; i < text.length; i++) {
                if (text.charAt(i).isEmpty()) {
                    output += text.charAt(i);
                } else {
                    let textCode = text.charCodeAt(i);
                    let keyCode = keyText.charCodeAt(i);

                    output += normalizer(textCode, keyCode);
                }
            }

            return output;
        },
    },
};
