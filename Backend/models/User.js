module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['admin', 'hr', 'student'],
            allowNull:false
        },
        id_role:{
            type: DataTypes.STRING,
            allowNull:true
        },
        token: {
            type: DataTypes.STRING,
            allowNull:true
        }}, 
        {
            timestamps: false,
           
        }
      );
      
   return Users;
};