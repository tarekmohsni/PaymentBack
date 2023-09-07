module.exports = (sequelize, Sequelize) => {
    const permissions = sequelize.define("permissions", {
            permission_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            value: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            active: {
                type: Sequelize.STRING,
                defaultValue: 'Y'
            },
        },
        {timestamps: false,}
    );

    permissions.prototype.fields = [
        'id',
        'value',
        'description',
        'active'

    ];

    permissions.prototype.fieldsSearchMetas = [
        'id',
        'value',
        'description',
        'active'
    ];

    return permissions;
};