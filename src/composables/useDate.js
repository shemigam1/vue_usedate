// import { ref } from 'vue'

export default function useDate() {

    const date = new Date()

    const getDay = () => {
        return date.getDate()
    }

    const getMonth = () => {
        return date.getMonth()
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const getDayOfWeek = () => {
        const day = date.getDay()
        return daysOfWeek[day]
    }

    const addDay = (numOfDays) => {
        const newDate = new Date(date)
        const nowMonth = newDate.getMonth()
        newDate.setDate(getDay() + numOfDays)

        if (newDate.getMonth() !== nowMonth) {
            newDate.setDate(0);
        }

        return newDate
    }

    const addMonth = (numOfMonths) => {
        const newDate = new Date(date)
        newDate.setMonth(getMonth() + numOfMonths)

        if (newDate.getMonth() > 11) {
            newDate.setFullYear(newDate.getFullYear() + 1)
            newDate.setMonth(0)
        }
        return newDate
    }

    return {
        date,
        getDay,
        getMonth,
        getDayOfWeek,
        addDay,
        addMonth
    }
}