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
  return (
    <Container isTimerPickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateselected={setSelectedDate} />
      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            terça feira <span>20 de setembro</span>
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
