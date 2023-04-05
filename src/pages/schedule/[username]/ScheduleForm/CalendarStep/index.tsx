import { useState } from 'react'
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
import { useQuery } from '@tanstack/react-query'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}
interface CalendarStepProps {
  onSelectDateTime: (date: Date) => void
}
export function CalendarStep({ onSelectDateTime }: CalendarStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()
  const username = String(router.query.username)
  const isDateSelected = !!selectedDate
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithOutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null
  const { data: availability } = useQuery<Availability>(
    ['availability', selectedDateWithOutTime],
    async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithOutTime,
        },
      })
      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )
  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate()
    onSelectDateTime(dateWithTime)
  }
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
                  onClick={() => handleSelectTime(hour)}
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
