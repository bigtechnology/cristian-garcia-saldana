import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '../../../services';
import { Input } from '../Input';

const ContactForm = (): React.ReactElement => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IContactFormProps> = async (data) => {
    console.log('SENT');
    try {
      // console.log('Form Data: ', data);
      await sendEmail(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-page">
      <h1>Get in touch</h1>
      <p>I look forward to helping you achieve your fitness goals</p>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="firstName"
          placeholder="First name"
          label="First Name*"
          name="firstName"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="lastName"
          placeholder="Last name"
          label="Last Name"
          name="lastName"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="email"
          placeholder="Email"
          label="Email*"
          name="email"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="phone"
          type="phone"
          placeholder="Phone number"
          label="Phone Number"
          name="phone"
          // rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <Input
          id="message"
          placeholder="Enter your message"
          label="Message*"
          maxLength={255}
          name="message"
          rules={{ required: 'Required!' }}
          errors={errors}
          control={control}
        />
        <input
          id="submit"
          type="submit"
          name="submit"
          value="Submit"
          className="form-btn"
          // onClick={() => clearErrors('form')}
        />
      </form>
    </div>
  );
};

interface IContactFormProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default ContactForm;
