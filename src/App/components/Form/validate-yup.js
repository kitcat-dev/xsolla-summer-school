function getErrorsFromValidationError(validationError) {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce(
    (errors, error) => ({
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }),
    {},
  );
}

export default function validate(getValidationSchema) {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
}
