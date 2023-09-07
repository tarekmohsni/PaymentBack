module.exports = (sequelize, Sequelize) => {
    const has_permissions = sequelize.define("has_permissions", {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            role_id: {
                type: Sequelize.INTEGER
            },
            permission_id: {
                type: Sequelize.INTEGER
            },
            active: {
                type: Sequelize.STRING,
                defaultValue: 'Y'
            },
        },
        {timestamps: false,}
    );

    has_permissions.prototype.fields = [
        'id',
        'role_id',
        'permission_id',
        'active'

    ];

    has_permissions.prototype.fieldsSearchMetas = [
        'id',
        'role_id',
        'permission_id',
        'active'
    ];
    has_permissions.associate = function (models) {
        has_permissions.belongsTo(models.roles, {
            foreignKey: 'role_id'
        });
        has_permissions.belongsTo(models.permissions, {
            foreignKey: 'permission_id'
        });
    };

    return has_permissions;
};
