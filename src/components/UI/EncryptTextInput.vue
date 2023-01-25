<template>
    <input
        :type="type"
        class="form-control mb-2 mt-3"
        :placeholder="placeholder"
        @input="onChanged"
    />
</template>

<script>
export default {
    name: "EncryptTextInput",
    props: {
        type: {
            type: String,
            required: false,
            default: "text",
        },
        modelValue: [String, Number],
    },
    methods: {
        onChanged(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style></style>
