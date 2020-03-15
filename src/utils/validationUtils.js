const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/
};

function regexTester(field, regex) {
  if (regex.test(field.value)) {
    return true;
  } else {
    return false;
  }
}

const validateAuthentication = (event, setState) => {
  const error = regexTester(event.target, patterns[event.target.name]);

  setState({
    [`errorAuth${event.target.name}`]: error
  });
};

export default validateAuthentication;
