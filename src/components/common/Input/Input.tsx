import React from 'react';
import DatePicker from 'react-datepicker';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import InputMask from 'react-input-mask';

const PHONE_MASK = '(999) 999-9999';

const Input = ({
  label,
  type = 'text',
  id,
  name,
  placeholder,
  control,
  errors = {},
  rules = {},
  defaultValue,
  ...inputProps
}: IInputProps): React.ReactElement => {
  return (
    <div className="input-field">
      <div className="input-wrapper">
        {label && <label htmlFor={id}>{label}</label>}
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field: { value, ...field } }) => {
            return type === 'date' ? (
              <DatePicker
                placeholderText={placeholder}
                {...field}
                selected={value}
              />
            ) : type === 'time' ? (
              <DatePicker
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText={placeholder}
                selected={value}
                {...field}
              />
            ) : type === 'phone' ? (
              <InputMask
                id={id}
                type={type}
                mask={PHONE_MASK}
                value={value}
                {...field}
                {...inputProps}
              />
            ) : (
              <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                {...field}
                {...inputProps}
              />
            );
          }}
        />
      </div>
      {errors[name] && (
        <div className="input-error">{errors[name].message}</div>
      )}
    </div>
  );
};

interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  id: string;
  name: string;
  label?: string;
  // TODO create the optional textarea render
  type?:
    | 'text'
    | 'email'
    | 'phone'
    | 'button'
    | 'number'
    | 'date'
    | 'time'
    | 'textarea';
  min?: number;
  placeholder?: string;
  defaultValue?: unknown;
  errors?: UseFormStateReturn<FieldValues>['errors'];
  control: Control<FieldValues>;
  rules?: ControllerProps['rules'];
}

export default Input;
