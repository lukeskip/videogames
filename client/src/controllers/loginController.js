import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const loginController = (formData) => {
  console.log("trying to login...");

  const emailRegext = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (!emailRegext.test(formData.email))
    return { access: false, message: "email inválido" };

  if (!emailRegext.test(formData.email))
    return { access: false, message: "email inválido" };

  try {
    const response = axios.post(`${HOST}/login`, formData);
    return { access: response.data.access };
  } catch (error) {
    return { access: error.response.access, message: error.response.message };
  }

  return results;
};

export default loginController;
