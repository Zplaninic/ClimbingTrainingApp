export function validateAuthentication(field, regex) {
  if (regex.test(field.value)) {
    return true;
  } else {
    return false;
  }
}
