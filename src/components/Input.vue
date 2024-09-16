<script setup lang="ts">
    import { type InputTypeHTMLAttribute } from "vue";

    defineProps<{ label: string; id: string; type: InputTypeHTMLAttribute }>();

    const date = defineModel<string>();
</script>

<template>
    <div>
        <label :for="id">{{ label }}:</label>
        <input type="date" :id="id" v-model="date" required />
    </div>
</template>

<style scoped>
    div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>
