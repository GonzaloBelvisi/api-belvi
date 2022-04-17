const cors = require("cors")
const express = require("express");

//Creamos nuestra API
const api = express();
api.use(cors())

//Configurar mi primer endpoint
api.get("/precios", (req, res) => {
    const precios = [
        { id: 1, name: "Intel", description: "PC Intel Gamer", components: ["I7 10700F", "RTX 3080", "64GB RAM DDR4"], price: 1400, },
        { id: 2, name: "Amd", description: "Pc Amd Gamer", components: ["Ryzen 9 5950x", "RTX 3090TI", "64GB RAM DDR4"], price: 1350, },
        { id: 3, name: "Qualcomm", description: "Pc Amd Gamer", components: ["Snapdragon 898", "RTX 3060", "64GB RAM DDR4"], price: 1100, }
    ]
    res.send(precios)
});

//Levantamos nuestra api y escuchamos el puerto que le digamos
api.listen(4000);