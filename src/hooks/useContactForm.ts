import { useState } from 'react';

const empty = { name: '', email: '', subject: '', message: '' };

 function useContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const update = (field: keyof FormValues, value: string) => {
  setValues((v) => ({ ...v, [field]: value }));

  if (errors[field]) {
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  if (status === 'sent') {
    setStatus('idle');
  }
};

  const validate = () => {
    const next = { name: '', email: '', subject: '', message: '' };
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email.';
    if (!values.subject.trim()) next.subject = 'Please enter a subject.';
    if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const next = validate();

  setErrors(next);

  if (Object.values(next).some(Boolean)) return;

  setStatus('sending');

  window.setTimeout(() => {
    setStatus('sent');
    setValues(empty);
  }, 1200);
};

  return { values, errors, status, update, submit };
}

export default useContactForm