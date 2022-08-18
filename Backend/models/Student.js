module.exports = (sequelize, DataTypes)=>{
    const Student = sequelize.define("Student", {
        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        course_completion: {
            type: DataTypes.STRING
            
        },
        course_engagment: {
            type: DataTypes.STRING
          
        },
        project_degree: {
            type: DataTypes.STRING
          
        },
        team_project_degree: {
            type: DataTypes.STRING
 
        },
        bonus_project_urls: {
            type: DataTypes.STRING,
            allowNull:false
        },
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'deactive', 'to_meet'],
            defaultValue: 'deactive'
        },
    } , 
    {
        timestamps: false,
       
    }
    );
        Student.associate = (models)=>{
           // Student.hasOne(models.User, {
           //     onDelete: "cascade",
           // });
            Student.hasMany(models.Meetings, {
                onDelete: "cascade",
            })
        };
   return Student;
};