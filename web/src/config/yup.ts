import { setLocale } from 'yup';

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

setLocale({
  string: {
    email: 'Digite um e-mail válido',
    min: ({ min }) => `No mínimo ${min} dígitos`,
  },

  mixed: {
    required: ({ path, label }) =>
      `${capitalize(label || path || '')} obrigatório`,
  },
});
