import * as Yup from 'yup';
import { YOUTUBE_ID_LENGTH, MAX_KP_ID_LENGTH, IMDB_ID_LENGTH } from './const';

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    name: Yup.object({
      ru: Yup.string().required('Название фильма обязательно'),
      en: Yup.string().required('Название фильма по-английски обязательно'),
    }),
    director: Yup.object({
      ru: Yup.string().required('Имя режиссера обязательно'),
      en: Yup.string().required('Имя режиссера по-английски обязательно'),
    }),
    famousPeople: Yup.object({
      ru: Yup.string().required('Знаменитости в кадре обязательны'),
      en: Yup.string().required(
        'Знаменитости в кадре по-английски обязательны'
      ),
    }),
    description: Yup.object({
      ru: Yup.string().required('Нужно рассказать, о чем фильм'),
      en: Yup.string().required('Нужно по-английски рассказать, о чем фильм'),
    }),
    whatILikeHere: Yup.object({
      ru: Yup.string().required(
        'Перечислите через запятую, что вам понравилось в фильме'
      ),
      en: Yup.string().required(
        'Перечислите по-английски через запятую, что вам понравилось в фильме'
      ),
    }),
    kpID: Yup.string()
      .max(
        MAX_KP_ID_LENGTH,
        `Кинопоиск ID не может быть больше ${MAX_KP_ID_LENGTH} символов.`
      )
      .required('Кинопоиск ID обязателен'),
    imdbID: Yup.string()
      .max(
        IMDB_ID_LENGTH,
        `IMDb ID не может быть больше ${IMDB_ID_LENGTH} символов.`
      )
      .min(
        IMDB_ID_LENGTH,
        `IMDb ID не может быть меньше ${IMDB_ID_LENGTH} символов.`
      )
      .matches(/tt.+/, `IMDb ID должен начинаться с tt`)
      .required('IMDb ID обязателен'),
    releaseDate: Yup.string()
      .matches(
        /([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/,
        'Дата выхода должна соответствовать формату YYYY/MM/DD'
      )
      .required('Дата выхода обязательна'),
    watchingDate: Yup.string()
      .matches(
        /([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/,
        'Дата просмотра должна соответствовать формату YYYY/MM/DD'
      )
      .required('Дата просмотра обязательна'),
    trailerYoutubeID: Yup.string()
      .max(
        YOUTUBE_ID_LENGTH,
        `Идентификатор трейлера на Youtube не может быть больше ${YOUTUBE_ID_LENGTH} символов.`
      )
      .min(
        YOUTUBE_ID_LENGTH,
        `Идентификатор трейлера на Youtube не может быть меньше ${YOUTUBE_ID_LENGTH} символов.`
      )
      .matches(
        /([^\?&"'>]+)/,
        'Идентификатор трейлера на Youtube должен содержать 11 символов и содержать определенные символы'
      )
      .required('Идентификатор трейлера на Youtube обязателен'),
  });
}
