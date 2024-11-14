import nodemailer from 'nodemailer';
import constants from '../../config/constants.js'; // Dos niveles hacia arriba

// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar cualquier otro servicio de correo como Outlook o tu propio SMTP
  auth: {
    user: constants.email.user, // Cambia esto por tu email
    pass: constants.email.pass, // Cambia esto por tu contraseña o una contraseña de app si usas Gmail
  },
});

// Verificar la conexión y configuración de nodemailer
transporter.verify((error, success) => {
  if (error) {
  } else {
    console.log('El servidor de correo está listo para enviar mensajes');
  }
});

// Controlador para enviar correos desde el formulario
const sendContactFormEmail = async (req, res) => {
  try {
    
    // Asegúrate de que estás recibiendo todos los campos correctamente
    const { nombre, apellido, empresa, correo, telefono, conociste, motivo, mensaje } = req.body;

    if (!nombre || !apellido || !correo || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // Configurar el contenido del correo
    const mailOptions = {
      from: correo, // Quien envía el correo
      to: 'mateo.fuentes@apifycloud.com', // Dirección a la que quieres que llegue el correo
      subject: `Nuevo mensaje de contacto de ${nombre} ${apellido}`,
      text: `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Empresa: ${empresa}
        Correo: ${correo}
        Teléfono: ${telefono}
        Cómo conoció Apifycloud: ${conociste}
        Motivo: ${motivo}
        Mensaje: ${mensaje}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Correo enviado correctamente' });
  } catch (error) {
    res.status(500).send({ error: 'Error al enviar el correo', details: error.message });
  }
};

// Exportar el controlador usando export default
export default { sendContactFormEmail };
