const getQueryVariable = (variable, location) => {
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get(variable);
};
export default getQueryVariable;
