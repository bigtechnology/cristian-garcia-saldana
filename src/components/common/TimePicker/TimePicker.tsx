import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = ({
  id,
  label,
  placeholder,
}: ITimePickerProps): React.ReactElement => {
  const [startTime, setStartTime] = useState<Date>();

  // console.log('START TIME: ', startTime);

  return (
    <div className="timepicker">
      {label && <label htmlFor={id}>{label} : </label>}
      <DatePicker
        selected={startTime}
        onChange={(time) => {
          if (time instanceof Date) {
            setStartTime(time);
          }
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        placeholderText={placeholder}
      />
    </div>
  );
};

interface ITimePickerProps {
  id: string;
  label?: string;
  placeholder: string;
}

export default TimePicker;
