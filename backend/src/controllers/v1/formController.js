import axios from 'axios';
import constants from '../../config/constants.js';

const verifyCaptcha = async (req, res) => {
  const recaptchaResponse = req.body['g-recaptcha-response'];
  const secretKey = constants.email.secretKey  // Reemplaza con tu clave secreta de Google reCAPTCHA

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

  try {
    const response = await axios.post(verificationURL);
    if (response.data.success) {
      // CAPTCHA validado, continúa con el procesamiento del formulario
      res.status(200).json({ message: 'CAPTCHA validado correctamente' });
    } else {
      // CAPTCHA inválido, muestra un error
      res.status(400).json({ message: 'Error al validar el CAPTCHA, por favor inténtalo de nuevo.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar el CAPTCHA.', error });
  }
};

export default { verifyCaptcha };
