import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const sendEmail = async <FormType = Record<string, unknown>>(
  data: FormType,
): Promise<EmailJSResponseStatus> => {
  const result = await emailjs.send(
    'service_04oiimp',
    'template_u6rmqna',
    data,
    'user_bZVp1GdKAL6LGg9VELNC2',
  );
  return result;
};

export default sendEmail;
