import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const loginController = async (formData) => {
  const emailRegext = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (!emailRegext.test(formData.email))
    return { access: false, message: "Email inválido" };

  if (!emailRegext.test(formData.email))
    return { access: false, message: "Email inválido" };

  if (!formData.password)
    return { access: false, message: "Tienes que escribir un password" };

  try {
    const response = await axios.post(`${HOST}/login`, formData);
    return { access: response.data.access };
  } catch (error) {
    console.log(error);
    return error.response.data
      ? { access: error.response.access, message: error.response.message }
      : { access: false, message: error.message };
  }

  return results;
};

export default loginController;
