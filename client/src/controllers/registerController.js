import axios from "axios";
const HOST = import.meta.env.VITE_HOST;

const registerController = async (formData) => {
  const emailRegext = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (!emailRegext.test(formData.email))
    return { access: false, message: "email inválido" };

  if (!formData.password)
    return {
      access: false,
      message: "Debes escribir una contraseña",
    };

  if (formData.password.length < 6)
    return {
      access: false,
      message: "La contraseña es demasiado corta",
    };

  if (formData.password !== formData.passwordConfirm)
    return { access: false, message: "Las contraseñas no coinciden" };

  try {
    const response = await axios.post(`${HOST}/register`, formData);
    return { access: response.data.access };
  } catch (error) {
    return error.response.data
      ? { access: error.response.access, message: error.response.message }
      : { access: false, message: error.message };
  }
};

export default registerController;
