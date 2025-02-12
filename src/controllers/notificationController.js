// src/controllers/notificationController.js
const transporter = require("../config/emailConfig");
const productCreatedEmailTemplate = require("../templates/productCreatedEmail");
const path = require("path");
require("dotenv").config();  // Para acceder a las variables de entorno

/**
 * Maneja la notificación de "producto creado" y envía un correo con logo
 */
const productCreatedNotification = async (req, res) => {
  try {
    const { name, stock, createdAt } = req.body;

    if (!name) {
      return res.status(400).json({ message: "El campo 'name' es obligatorio." });
    }

    // Genera el contenido HTML del correo
    const htmlContent = productCreatedEmailTemplate({ name, stock, createdAt });

    const emailRecipient = process.env.NOTIFICATION_EMAIL

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: emailRecipient,
      subject: "¡Se ha creado un nuevo producto!",
      html: htmlContent,
      attachments: [
        {
          filename: 'logo.png', // Nombre del archivo de imagen
          path: path.join(__dirname, '..', 'assets', 'logo.png'),
          cid: 'logo', // ID de referencia
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado (producto creado):", info.messageId);

    return res.status(200).json({
      message: "Notificación procesada y correo enviado",
      mailId: info.messageId,
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({
      message: "Error interno al procesar la notificación de producto creado",
    });
  }
};

module.exports = { productCreatedNotification };
