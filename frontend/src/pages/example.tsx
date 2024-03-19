import { Button } from "@yamada-ui/react"
import { Calendar } from "@yamada-ui/calendar"
import { useState } from "react"

export default function CalendarView() {

  const [date, setChange] = useState<Date>(new Date())

  const onChange = (date: Date) => {
    setChange(date);  // タップした日付をdateにセット
    console.log(date);
  };
  
  return (
    <>
     <Calendar
      value={date}
      onChange={onChange}
      size="full"
      variant="subtle"
      today
      defaultValue={new Date(new Date().setDate(1))} />
      <div>
        <h1>{date.toDateString()}</h1>
      </div>
    </>
  )
}