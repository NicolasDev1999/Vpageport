// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Respuestas automáticas para preguntas estándar
const standardResponses = {
  "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
  "proyectos": "He trabajado en varios proyectos web, backend y frontend con Node.js y React.",
  "experiencia": "Tengo experiencia con Java, JavaScript, React, Node.js, MySQL y Git, entre otros.",
  "contacto": "Puedes contactarme a través de mi correo electrónico o redes sociales.",
  "servicios": "Ofrezco servicios de desarrollo web, diseño y mantenimiento de aplicaciones.",
  "gracias": "¡De nada! Estoy aquí para ayudarte.",
  "adios": "¡Hasta luego! No dudes en volver si tienes más preguntas.",
  "react": "React es una biblioteca de JavaScript para construir interfaces de usuario. Lo uso en varios de mis proyectos.",
  "node": "Node.js permite ejecutar JavaScript en el backend, ideal para crear APIs y manejar peticiones de clientes.",
};

app.post('/api/message', (req, res) => {
  const { message } = req.body;
  const lowerMessage = message.toLowerCase();

  // Encuentra una respuesta automática basada en el mensaje recibido
  let response = "No estoy seguro de cómo responder a eso. ¿Puedes intentar con otra pregunta?";
  for (let key in standardResponses) {
    if (lowerMessage.includes(key)) {
      response = standardResponses[key];
      break;
    }
  }

  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
