const path = require('path');
const fs = require('fs');



const platosController = {

    view: function (req, res) {
        let platosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/platos.json')))
        let platoId = req.params.id;
        const platoShow = platosActuales.find(plato => plato.id == platoId);
        res.render(path.resolve(__dirname, '..', 'views', 'platos', 'view'), { platoShow: platoShow, Title: 'Plato-Visualizar' })
    },

}
module.exports = platosController;