module.exports = (sequelize, DataTypes)=>{
    const HrUsers = sequelize.define("HrUsers", {
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        company: {
            type: DataTypes.STRING,
            allowNull:false
        },
        max_reserved_student: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
    }, 
    {
        timestamps: false,
       
    }
   );
   HrUsers.associate = (models)=>{
        //HrUsers.hasOne(models.User, {
        //    onDelete: "cascade",
        //});
        HrUsers.hasMany(models.Meetings, {
            onDelete: "cascade",
        })
    };
   return HrUsers;
};