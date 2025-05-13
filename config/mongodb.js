const mongoose = require('mongoose');

mongoose.connect('clave').then(() => {
  console.log('Conexión a MongoDB exitosa');
}).catch((error) => {
  console.error('Error de conexión a MongoDB:', error);
});

module.exports = mongoose;