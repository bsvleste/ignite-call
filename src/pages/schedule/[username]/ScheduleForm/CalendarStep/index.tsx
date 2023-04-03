import dayjs from 'dayjs'
import { useState } from 'react'
import Calendar from '../../../../../components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'

export default function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null
  return (
    <Container isTimerPickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateselected={setSelectedDate} />
      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            {weekDay} <span>{describeDate}</span>
          </TimerPickerHeader>
          <TimerPickerList>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem disabled>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>08:00</TimerPickerItem>
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}
