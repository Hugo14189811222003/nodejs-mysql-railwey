const conectiondatabase = require('../bd.js')

// Endpoint para obtener todos los usuarios
module.exports.GetUsers = async (req, res) => {
    try {
        const [userGets] = await conectiondatabase.query('SELECT * FROM usuarios');
        if (userGets.length === 0) {
            res.status(404).json('No hay usuarios');
        } else {
            res.status(200).json(userGets);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports.GetUser = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await conectiondatabase.query('select * from usuarios where id = ?', [id]);
        if(getUser.length == 0){
            res.json('no existe la tabla');
            return
        } else {
            res.json(getUser[0]);
        }
    } catch (error) {
        res.status(404).json({message: message.error});
    }
}

module.exports.getUserAndPassword = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
        const [resultResponse] = await conectiondatabase.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);
        if(resultResponse.length === 0){
            res.status(401).json({
                message: 'no existe los datos'
            })
        } else {
            res.status(200).json({
                message: 'datos encontrados con exito'
            })

        }
    } catch (error) {
        res.status(500).json({message: 'error: ', error})
    }
}

module.exports.postUser = async (req, res) => {
    try {
        const {name, username, email, password} = req.body;
        if(name, username, email, password){
            const [verifyemail] = await conectiondatabase.query('select * from usuarios where email = ?', [email]);
            if(verifyemail.length > 0){
                res.send('el email ya existe ingresa otro');
                console.log('el gmail ya existe ingresa otro');
            } else {
                const [postUser] = await conectiondatabase.query('insert into usuarios (name, username, email, password) value (?,?,?,?)', [name, username, email, password]);
                res.send(postUser);
            }
        } else {
            res.send('no estan todos los datos completos');
        }
    } catch (error) {
        console.log('error de servidor');
    }
}