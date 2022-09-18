const formToKeyValuePair = (formId) => {
  const form = document.getElementById(formId);
  const formValues = Array.from(form.childNodes)
    .filter((e) => e.tagName === "INPUT" || e.tagName === "SELECT")
    .reduce((prev, current) => {
      current.type === "number"
        ? (prev[current.name] = Number(current.value))
        : (prev[current.name] = current.value);
      return prev;
    }, {});
  formValues.id = idGenerator();
  return formValues;
};

const idGenerator = () => {
  return String(Date.now());
};
