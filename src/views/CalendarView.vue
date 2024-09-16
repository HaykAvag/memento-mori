<script setup lang="ts">
    import { useStore, ageOfDeath, weeksInAYear } from "@/stores/calendar";

    const store = useStore();

    const hasWeekPassed = (i: number, j: number) => {
        // i - 1 to start from 0
        return (i - 1) * 52 + j < store.weeksPassed;
    };
</script>

<template>
    <div>
        <div class="header">
            <p>tasks</p>
            <h1>Calendar</h1>
            <p>brain dump</p>
        </div>

        <div class="row" v-for="i in ageOfDeath">
            <div
                :class="['square', { filled: hasWeekPassed(i, j) }]"
                v-for="j in weeksInAYear"
            ></div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .row {
        display: flex;
        gap: 5px;
        height: 15px;
        justify-content: center;
    }

    .square {
        width: 10px;
        height: 10px;
        border: 1px solid rgb(150, 150, 150);
    }

    .filled {
        background-color: rgb(150, 150, 150);
    }
</style>
