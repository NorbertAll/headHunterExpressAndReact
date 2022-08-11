module.exports = (sequelize, DataTypes)=>{
    const Meetings = sequelize.define("Meetings", {
       
    }, 
    {
        timestamps: true,
        createdAt: 'time_create',
       
    });
   return Meetings;
}