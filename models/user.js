module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("Users", {
        e_mail: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.STRING,
          //  values: ['admin', 'hr', 'student'],
            allowNull:false
        },
        id_role:{
            type: DataTypes.STRING,
            allowNull:false
        },
        token: {
            type: DataTypes.STRING,
            allowNull:false
        }}, 
        {
            timestamps: false,
           
        }
      );
       
   return Users;
};