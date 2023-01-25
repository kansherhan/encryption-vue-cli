<template>
    <div :id="name + '-encrypt'" class="row">
        <div class="col">
            <h2 class="encrypt-title mb-1">
                <slot name="title"></slot>
            </h2>

            <div class="encrypt-decription mb-4">
                <p>
                    <span class="ps-4"></span>
                    <slot name="short-description"></slot>
                </p>

                <p>
                    <span class="ps-4"></span>
                    <slot name="description"></slot>
                </p>
            </div>

            <div class="rounded border p-3">
                <div class="checkboxs">
                    <EncryptCheckBox
                        v-model="data.isUppercase"
                        :name="`${name}-uppercase`"
                        >{{ encryptUppercaseText }}</EncryptCheckBox
                    >

                    <EncryptCheckBox
                        v-model="data.isEncrypt"
                        :name="`${name}-is-encrypt`"
                        >{{ encryptStatusText }}</EncryptCheckBox
                    >
                </div>

                <div class="inputs">
                    <EncryptTextInput
                        placeholder="Жасырылатын сөз"
                        v-model="data.text"
                    />

                    <EncryptTextInput
                        :type="keyType"
                        placeholder="Кілт"
                        v-model="data.key"
                    />

                    <EncryptTextInput
                        placeholder="Жауабы"
                        :value="encryptValue"
                        readonly
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                text: "",
                key: "",
                isUppercase: true,
                isEncrypt: true,
            },
        };
    },
    props: {
        name: {
            type: String,
            required: true,
        },

        keyType: {
            type: String,
            required: true,
            default: "text",
        },

        onEncrypt: {
            type: Function,
            required: true,
        },
        onDencrypt: {
            type: Function,
            required: true,
        },
    },
    computed: {
        encryptStatusText() {
            return this.data.isEncrypt ? "Шифрлау" : "Дешифрлеу";
        },
        encryptUppercaseText() {
            return (this.data.isUppercase ? "Бас" : "Кішкентай") + " әріппен";
        },
        encryptValue() {
            if (this.data.text.isNotEmpty() && this.data.key.isNotEmpty()) {
                let text = this.data.isEncrypt
                    ? this.onEncrypt(this.data)
                    : this.onDencrypt(this.data);

                return this.data.isUppercase ? text : text.toLowerCase();
            }
        },
    },
};
</script>

<style></style>
