
module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("roles", {
            role_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            role_name: {
                type: Sequelize.STRING
            },
            active: {
                allowNull: true,
                type: Sequelize.STRING,
                defaultValue: 'Y'
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
        },
        {timestamps: false,}
    )

    role.prototype.fields = [
        'role_id',
        'role_name',
        "active",
        'created_at',
        'updated_at'
    ],
        role.prototype.fieldsSearchMetas = [
            'role_id',
            'role_name',
        ]

    return role
}
