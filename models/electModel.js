import Sequelize from "sequelize";
import db from "../config/dbConfig.js";

const electModel = db.define("electDistribute", {
    nameOfholder: {
        type: Sequelize.DataTypes.STRING
    },
    meterNumber: {
        type: Sequelize.DataTypes.DOUBLE
    },
    address: {
        type: Sequelize.DataTypes.STRING
    }
},{ 
    freezeTableName: true
});

export default electModel;