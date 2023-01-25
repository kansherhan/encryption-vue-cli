<template>
    <div class="form-check form-check-inline form-switch">
        <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :id="`encrypt-checkbox-for-${name}`"
            :checked="modelValue"
            @input="onChanged"
        />
        <label class="form-check-label" :for="`encrypt-checkbox-for-${name}`"
            ><slot></slot
        ></label>
    </div>
</template>

<script>
export default {
    name: "EncryptCheckBox",
    props: {
        name: {
            type: String,
            required: true,
        },
        modelValue: Boolean,
    },
    methods: {
        onChanged(event) {
            this.$emit("update:modelValue", event.target.checked);
        },
    },
};
</script>

<style></style>
