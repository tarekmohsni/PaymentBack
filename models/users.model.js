const {} = require("http-errors")
let bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
            user_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING
            },
            password_hash: {
                type: Sequelize.STRING
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            role_id: {
                type: Sequelize.INTEGER
            },
            city:{
                type: Sequelize.STRING
            },
            tel:{
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

            }
        },
        {timestamps: false})

    users.prototype.fields = [
        'user_id',
        'username',
        'password_hash',
        'first_name',
        'last_name',
        'email',
        'role_id',
        'city',
        'tel',
        'active',
        'created_at',
        'updated_at',

    ],
        users.prototype.fieldsSearchMetas = [
            'user_id',
            'username',
            'password_hash',
            'first_name',
            'last_name',
            'email',
            'role_id',
            'city',
            'tel',
            'active',
            'created_at',
            'updated_at',
        ]
    users.prototype.setPassword_hash = function (password) {
            let salt = bcrypt.genSaltSync();
            this.password_hash = bcrypt.hashSync(password, salt);
        };
    users.prototype.verifyPassword = function (password) {
            return bcrypt.compareSync(password, this.password_hash);
        };
    users.associate = function (models) {
        users.belongsTo(models.roles, {
            foreignKey: 'role_id'
        });
    };

    return users
}
