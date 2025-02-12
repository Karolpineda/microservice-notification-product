// src/templates/productCreatedEmail.js

function productCreatedEmailTemplate(productData) {
    const { name, stock, createdAt } = productData;

    return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Notificación de producto creado</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .header {
            background-color: #2196F3;
            color: #ffffff;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start; /* Alinea los elementos al principio */
          }
          .header img {
            width: 60px; /* Ajusta el tamaño del logo */
            height: auto;
            margin-right: 20px; /* Espacio entre el logo y el texto */
          }
          .header h1 {
            font-size: 30px;
            color: white;
            font-family: 'Arial', sans-serif; /* Puedes cambiar por otro tipo de letra más profesional */
            margin: 0;
            font-weight: bold;
          }
          .content {
            padding: 20px;
          }
          .content h1 {
            font-size: 24px;
            color: #333;
          }
          .content p {
            font-size: 16px;
            color: #333;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          .table th, .table td {
            padding: 8px;
            border: 1px solid #ddd;
          }
          .footer {
            background-color: #2196F3;
            color: #ffffff;
            text-align: center;
            padding: 10px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <!-- Coloca el logo de tu empresa aquí -->
            <img src="cid:logo" alt="Logo de StockMaster"/>
            <h1>StockMaster</h1> <!-- Nombre de la empresa en el mismo contenedor -->
          </div>
          <div class="content">
            <p>¡Hola! Se ha registrado un nuevo producto en el sistema. Estos son los detalles:</p>
            <table class="table">
              <tr>
                <th>Nombre:</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Stock Inicial:</th>
                <td>${stock}</td>
              </tr>
              <tr>
                <th>Fecha de Creación:</th>
                <td>${createdAt}</td>
              </tr>
            </table>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
          </div>
          <div class="footer">
            <p>Este es un correo automático. Por favor, no responder directamente.</p>
            <p>© 2025 - StockMaster</p>
          </div>
        </div>
      </body>
    </html>
    `;
}

module.exports = productCreatedEmailTemplate;
