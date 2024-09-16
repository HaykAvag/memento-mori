import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const ageOfDeath = 80;
export const weeksInAYear = 52;

const msInDay = 86400000;

export const useStore = defineStore("calendar", () => {
    // TODO: Remove placeholder in future.
    const dateOfBirth = ref<Date>(new Date(2003, 4, 8));

    // To Calculate, I need today's date, and date of birth valueOf subtracted.
    // valueOf turned into weeks
    // how many weeks have passed since the date of bith.
    const weeksPassed = computed(() => {
        const msPassed = new Date().valueOf() - dateOfBirth.value.valueOf();
        const daysPassed = msPassed / msInDay;
        return daysPassed / 7;
    });

    return { weeksPassed, dateOfBirth };
});
