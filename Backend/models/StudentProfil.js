module.exports = (sequelize, DataTypes)=>{
    const StudentProfil = sequelize.define("StudentProfil", {
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        tel:{
            type: DataTypes.STRING,
            allowNull:true
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull: true
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull: true
        },
        github_username:{
            type:DataTypes.STRING,
            allowNull: true
        },
        portfolio_urls:{
            type:DataTypes.STRING,
            allowNull: true
        },
        project_urls:{
            type:DataTypes.STRING,
            allowNull: true
        },
        bio:{
            type:DataTypes.STRING,
            allowNull: true
        },
        expected_type_work:{
            type:DataTypes.STRING,
            allowNull: true
        },
        target_work_city:{
            type:DataTypes.STRING,
            allowNull: true
        },

        expected_contract_type: {
            type: DataTypes.STRING,
            
            allowNull:true
        },
        expected_salary:{
            type: DataTypes.STRING,
            allowNull:true
        },
        can_takeapprenticeship:{
            type: DataTypes.STRING,
            allowNull:true
        },
        months_of_commercial_exp:{
            type: DataTypes.STRING,
            allowNull:true
        },
        education:{
            type:DataTypes.STRING,
            allowNull: true
        },
        work_experince:{
            type:DataTypes.STRING,
            allowNull: true
        },
        courses:{
            type:DataTypes.STRING,
            allowNull: true
        },
}, 
        {
            timestamps: false,
           
        });
        
        
   return StudentProfil;
};