"use client";

import { Button } from "@yamada-ui/react"
import { Calendar } from "@yamada-ui/calendar"
import { useState } from "react"
import { useRouter } from "next/navigation";

export const HomePage = () => {

  const [date, setChange] = useState<Date>(new Date());
  const router = useRouter();

  const onChange = (date: Date) => {
    setChange(date);  // タップした日付をdateにセット
    console.log(date);
  };
  
  return (
      <div className="w-full max-w-2xl bg-white md:rounded-lg md:shadow-md p-4 md:p-10 my-10">
          <div className="bg-bgWhite p-[50px]">
              <Calendar
                value={date}
                onChange={onChange}
                size="full"
                variant="subtle"
                today
                defaultValue={new Date(new Date().setDate(1))}
              />
            <div>
              <h1>{date.toDateString()}</h1>
              <Button onClick={() => router.push('/')}>
                作成
              </Button>
            </div>
          </div>
      </div>
  )
}

export default HomePage;