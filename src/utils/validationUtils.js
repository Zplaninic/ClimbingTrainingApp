const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  // eslint-disable-next-line no-useless-escape
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/
};

function regexTester(field, regex) {
  if (regex.test(field.value)) {
    return true;
  } else {
    return false;
  }
}

export const validateAuthentication = (e, setError) => {
  const error = regexTester(e.target, patterns[e.target.name]);

  setError(error);
};
