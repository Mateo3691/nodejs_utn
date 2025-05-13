const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mateojoshua:hrK4dCnmyfcIddWk@test-utn.5ekxvq1.mongodb.net/').then(() => {
  console.log('Conexión a MongoDB exitosa');
}).catch((error) => {
  console.error('Error de conexión a MongoDB:', error);
});

module.exports = mongoose;