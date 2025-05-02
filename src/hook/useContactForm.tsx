import { useState, useEffect } from 'react';

export interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formValues, setFormValues] = useState<IFormInputs>({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const { name, email, message } = formValues;
    const emailValid = email.includes('@') && email.includes('.');
    setIsFormValid(name.trim() !== '' && emailValid && message.trim() !== '');
  }, [formValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (isFormValid) {
      console.log('Form submitted:', formValues);
      setFormValues({ name: '', email: '', message: '' });
      setIsSuccess(true);
      setIsFormSubmitted(false);
    }
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    isFormSubmitted,
    isFormValid,
    isSuccess,
  };
};
