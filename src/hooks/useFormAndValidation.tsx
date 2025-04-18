import { useState, ChangeEvent } from "react";


interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormAndValidation = (inputs: FormValues) => {
  
  const [values, setValues] = useState<FormValues>(inputs);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: e.target.validationMessage })); // e.target.validationMessage es una propiedad nativa de los elementos de formulario HTML que contiene el mensaje de error de validación generado por el navegador cuando un campo no cumple con los atributos de validación (como required, pattern, min, max, etc.).
    setIsValid(
      e?.target?.closest("form")?.checkValidity() || false); // e.target es el elemento input que cambió
  };                                                         // .closest("form") encuentra el formulario padre más cercano
                                                             // .checkValidity() es un método nativo que retorna true si TODOS los campos en el formulario son válidos, y false si al menos uno no lo es
  const resetForm = (
    values: FormValues = inputs,
    errors: FormErrors = {},
    isValid: boolean = false,
  ) => {
    setValues(values);
    setErrors(errors);
    setIsValid(isValid);
  };
  
  return { 
    values, 
    handleChange, 
    errors, 
    isValid, 
    resetForm 
  };
}

