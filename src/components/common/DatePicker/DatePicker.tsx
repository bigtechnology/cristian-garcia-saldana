import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RenderDatePicker = ({
  label,
  id,
  placeholder,
}: IDatePickerProps): React.ReactElement => {
  const [startDate, setStartDate] = useState<Date>(new Date(Date.now()));
  return (
    <div className="datepicker">
      {label && <label htmlFor={id}>{label} : </label>}
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          if (date instanceof Date) {
            setStartDate(date);
          }
        }}
        placeholderText={placeholder}
      />
    </div>
  );
};

interface IDatePickerProps {
  id: string;
  placeholder: string;
  label?: string;
}

export default RenderDatePicker;
