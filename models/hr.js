module.exports = (sequelize, DataTypes)=>{
    const Hr = sequelize.define("Hr", {
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
    });
   return Hr;
};