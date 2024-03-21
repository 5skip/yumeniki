import { Button } from "@yamada-ui/react"
import { Calendar } from "@yamada-ui/calendar"
import { useState } from "react"
import { useRouter } from "next/router";

export default function CalendarView() {

  const [date, setChange] = useState<Date>(new Date())
  const router = useRouter();

  const onChange = (date: Date) => {
    setChange(date);  // タップした日付をdateにセット
    console.log(date);
  };

  const handleClick = () => {
    router.push('/', { query: { date: date.toISOString() } });
  };
  
  return (
      <div className="bg-bgPurple">
        <div className="p-[100px]">
          <div className="bg-bgWhite p-[50px]">
            <Calendar
            value={date}
            onChange={onChange}
            size="full"
            variant="subtle"
            today
            defaultValue={new Date(new Date().setDate(1))} />
            <div>
              <h1>{date.toDateString()}</h1>
              <Button onClick={handleClick}>
                作成
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}