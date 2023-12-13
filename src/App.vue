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
      <p class="current-date"><span>Current Date: </span>{{ date }}</p>
      <p>Current day: {{ `${getDay()}th` }}</p>
      <p>Current day of week: {{ getDayOfWeek() }}</p>
      <p>Current Month: {{ getMonth() }}</p>

    </div>
    <div class="form">
      <div class="add">
        <label for="addDay">Add Day: </label>
        <input v-model="daysToAdd" type="number" placeholder="Number of days to add">
        <button @click="handleAddDay">Add</button>
      </div>
      <div class="add">
        <label for="addMonth">Add Month: </label>
        <input v-model="monthsToAdd" type="number" placeholder="Number of Months to add">
        <button @click="handleAddMonth">Add</button>
      </div>
    </div>
    <div v-if="datesAdded.length > 0" v-for="dates in datesAdded" class="datesAdded">
      <div class="days" v-if="dates.daysAdded">Days Added: {{ dates.daysAdded }}</div>
      <div class="days" v-else-if="dates.monthsAdded">Months Added: {{ dates.monthsAdded }}</div>
      <div class="">
        <p class="current-date"><span>New Date:</span> {{ dates.newDate }}</p>
      </div>
    </div>
    <div v-else class="">
      <p>No new dates Added</p>
    </div>
  </div>
</template>

<style scoped>
.current-date {
  border: 1px solid white;
  padding: 6px;
  border-radius: 4px;
}

.form {
  border: 1px solid white;
  padding: 10px;
  border-radius: 8px;
}

.days {
  text-align: left;
  font-weight: 700;
  font-size: larger;
}

.current-date span {
  font-weight: 700;
}

button {
  padding-top: 0px;
  padding-bottom: 0px;
}

.add {
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.add label {
  font-weight: 700;
  font-size: larger;
}
</style>
