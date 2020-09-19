import { setLocale } from 'yup';

setLocale({
  string: {
    email: 'Digite um e-mail válido',
    min: ({ min }) => `No mínimo ${min} dígitos`,
  },

  mixed: {
    required: ({ label }) => `${label} obrigatório`,
  },
});
