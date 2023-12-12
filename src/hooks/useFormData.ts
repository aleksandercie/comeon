import { useState } from 'react';

type InputType = 'username' | 'password';
type InitialValuesType = Record<InputType, string>;
type UseFormDataReturnType = [
  InitialValuesType,
  (type: InputType) => (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useFormData = (
  initialValues: InitialValuesType
): UseFormDataReturnType => {
  const [values, setValues] = useState(initialValues);

  const handleChange =
    (type: InputType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValues((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

  return [values, handleChange];
};

export default useFormData;
