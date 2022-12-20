import Sequelize from "sequelize";

const db = new Sequelize("electricityDB", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export default db;






/*
the problem am solving is the distribution of prepaid meters whereby
a person would have paid for a meter but is yet to be given and the electricity staff insist him or she has given 
this person a meter 
soo this api keeps track of people who have gotten and not
*/