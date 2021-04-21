import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const sendEmail = async <FormType = Record<string, unknown>>(
  data: FormType,
): Promise<EmailJSResponseStatus> => {
  const result = await emailjs.send(
    'service_tp8nzfc',
    'template_f97dmwa',
    data,
    'user_QrVZm09QRGGDUC0mHNWix',
  );
  return result;
};

export default sendEmail;
