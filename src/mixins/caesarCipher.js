export default {
    methods: {
        caesarEncrypt(data) {
            return this.caesarCipher(data, (textCode, key) => {
                return String.fromCharCode(textCode + (key % 26));
            });
        },
        caesarDencrypt(data) {
            return this.caesarCipher(data, (textCode, key) => {
                return String.fromCharCode(textCode - (key % 26));
            });
        },
        caesarCipher(data, normalizer) {
            let text = data.text.toUpperCase();
            let output = "";
            let key = parseInt(data.key);

            for (let i = 0; i < text.length; i++) {
                if (text.charAt(i).isEmpty()) {
                    output += text.charAt(i);
                } else {
                    let textCode = text.charCodeAt(i);

                    output += normalizer(textCode, key);
                }
            }

            return output;
        },
    },
};
