<script setup>
import { ref } from 'vue'
import useDate from './composables/useDate';
const { date, getDay, getMonth, getDayOfWeek, addDay, addMonth } = useDate()

// const newDay = ref(null)
// const newMonth = ref(null)
const daysToAdd = ref(null)
const monthsToAdd = ref(null)
const datesAdded = ref([])

const handleAddDay = () => {
  const value = addDay(daysToAdd.value)
  // newDay.value = value

  const dateData = {
    newDate: value,
    daysAdded: daysToAdd.value
  }
  datesAdded.value.push(dateData)
  // newDay.value = null
  // console.log(datesAdded.value[0].newDate);
  // console.log(daysToAdd.value);
}

const handleAddMonth = () => {
  const value = addMonth(monthsToAdd.value)
  const dateData = {
    newDate: value,
    monthsAdded: monthsToAdd.value
  }
  datesAdded.value.push(dateData)
  // newMonth.value = value
  // datesAdded.value.push(value)
  // newMonth.value = null
}

</script>

<template>
  <div class="container">
    <h1>Calculate a new date</h1>
    <div class="current">
      <p><span>Current Date: </span>{{ date }}</p>
      <p>Current day: {{ `${getDay()}th` }}</p>
      <p>Current day of week: {{ getDayOfWeek() }}</p>
      <p>Current Month: {{ getMonth() }}</p>

    </div>
    <div class="addDay">
      <label for="addDay">Add Day: </label>
      <input v-model="daysToAdd" type="number" placeholder="Number of days to add">
      <button @click="handleAddDay">Add</button>
    </div>
    <div class="addMonth">
      <label for="addMonth">Add Month: </label>
      <input v-model="monthsToAdd" type="number" placeholder="Number of Months to add">
      <button @click="handleAddMonth">Add</button>
    </div>
    <div v-if="datesAdded.length > 0" v-for="dates in datesAdded" class="datesAdded">
      <div class="" v-if="dates.daysAdded">Days Added: {{ dates.daysAdded }}</div>
      <div class="" v-else-if="dates.monthsAdded">Months Added: {{ dates.monthsAdded }}</div>
      <div class="">
        <p>New Date: {{ dates.newDate }}</p>
        <!-- <p>New day: {{ `${getDay(dates)}th` }}</p>
        <p>New day of week: {{ getDayOfWeek(dates) }}</p>
        <p>New Month: {{ getMonth(dates) }}</p> -->
      </div>
    </div>
    <div v-else class="">
      <p>No new dates Added</p>
    </div>
  </div>
</template>

<style scoped></style>
