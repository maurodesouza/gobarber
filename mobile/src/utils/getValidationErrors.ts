import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default (err: ValidationError) => {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};
