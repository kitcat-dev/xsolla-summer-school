import * as Yup from 'yup';
import {
  YOUTUBE_ID_LENGTH,
  MAX_KP_ID_LENGTH,
  IMDB_ID_LENGTH,
  IMDB_PREFIX,
} from './const';

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    name: Yup.string()
      // Добавить matches (regex)
      .required('Name is required.'),
    kpID: Yup.string()
      .max(
        MAX_KP_ID_LENGTH,
        `Kinopoisk ID has to be less than ${MAX_KP_ID_LENGTH} characters.`
      )
      .required('Kinopoisk ID is required'),
  });
}
