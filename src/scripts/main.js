AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00")
const eventTimeStamp = eventDate.getTime()

const counterTime = setInterval(function() {
    const now = new Date()
    const timeStamp = now.getTime()

    const eventDate = eventTimeStamp - timeStamp

    const msDay = 1000 * 60 * 60 * 24
    const msHour = 1000 * 60 * 60
    const msMinute = 1000 * 60

    const daysToEvent = Math.floor(eventDate / msDay)
    const hoursToEvent = Math.floor((eventDate % msDay) / msHour)
    const minutesToEvent = Math.floor((eventDate % msHour) / msMinute)
    const secondsToEvent = Math.floor((eventDate % msMinute) / 1000)

    console.log(daysToEvent)
    console.log(hoursToEvent)
    console.log(minutesToEvent)
    console.log(secondsToEvent)

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s` 

    if (eventDate < 0) {
        clearInterval(counterTime)
        document.getElementById('counter').innerHTML = 'Evento expirado'
    }
}, 1000)