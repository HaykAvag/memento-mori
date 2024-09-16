<script setup lang="ts">
    import Input from "@/components/Input.vue";
    import { useStore } from "@/stores/calendar";
    import { ref } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const dateOfBirth = ref<string>();

    const generate = () => {
        if (!dateOfBirth.value) {
            // Show error.
            return;
        }

        useStore().dateOfBirth = new Date(dateOfBirth.value);
        router.push("/calendar");
    };
</script>

<template>
    <form @submit.prevent="generate">
        <Input
            label="Date Of Birth"
            id="dateOfBirth"
            type="date"
            v-model="dateOfBirth"
        />

        <button type="submit">Generate Memento Mori Calendar</button>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
