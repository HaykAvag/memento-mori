<script setup lang="ts">
    import { RouterView } from "vue-router";
</script>

<template>
    <main>
        <RouterView />
        <!-- <RouterView v-slot="{ Component }">
            <Transition>
                <component :is="Component" />
            </Transition>
        </RouterView> -->
    </main>
</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.8s;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
