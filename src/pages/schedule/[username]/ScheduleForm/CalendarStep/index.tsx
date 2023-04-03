import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Calendar from '../../../../../components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'
import { useRouter } from 'next/router'
import { api } from '../../../../../lib/axios'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}
export default function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState<Availability | null>(null)
  const router = useRouter()
  const username = String(router.query.username)
  const isDateSelected = !!selectedDate
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }
    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        setAvailability(response.data)
      })
  }, [selectedDate, username])
  return (
    <Container isTimerPickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateselected={setSelectedDate} />
      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            {weekDay} <span>{describeDate}</span>
          </TimerPickerHeader>
          <TimerPickerList>
            {availability?.possibleTimes.map((hour) => {
              return (
                <TimerPickerItem
                  key={hour.toString()}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, '0')}:00h
                </TimerPickerItem>
              )
            })}
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}
