import { useEffect, useState } from "react";
import dateFormat from "dateformat"

const TimezoneOffset = 300 // My timezone offset in minutes (UTC-5:00)

export default function Time() {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const intervalId = setInterval(() => { setTime(getTime()) }, 1000)
    return () => { clearInterval(intervalId) }
  }, [])

  return (
    <div>
      {time}
    </div>
  )
}

function getTime() {
  const utcTime = new Date().getTime()
  const myTime = new Date(utcTime - TimezoneOffset * 60000)
  const localOffset = new Date().getTimezoneOffset()

  let timeStr = dateFormat(myTime, "UTC: h:MM TT")
  if (localOffset !== TimezoneOffset) {
    const hourOffset = (localOffset - TimezoneOffset) / 60
    timeStr += ` - ${Math.abs(hourOffset)}h ${hourOffset < 0 ? "ahead" : "behind"}`
  }

  return timeStr
}