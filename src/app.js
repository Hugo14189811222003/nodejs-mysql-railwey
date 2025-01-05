const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cor = require('cors');

app.use(cor());

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

app.use('/api/usuarios', require('./routers/usuarios.routes.js'));

app.use((req, res) => {
    res.status(404).json({
        message: 'la paguina no se encontro',
    })
})

app.post('logout', async (req, res) => {
    const token = req.headers.authorization.split('')[1];

    if (token) {
        try {
            // Aquí deberías implementar la lógica para invalidar el token en tu base de datos
            await invalidateTokenInDatabase(token); // Función ficticia
            res.status(200).json({ message: 'Cierre de sesión exitoso' });
        } catch (err) {
            res.status(500).json({ message: 'Error al cerrar sesión' });
        }
    } else {
        res.status(400).json({ message: 'Token no proporcionado' });
    }
})

module.exports = app;