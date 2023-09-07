const {Sequelize} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const transactions = sequelize.define('transactions', {
            transaction_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            shop_id: {
                type: Sequelize.INTEGER
            },
            player_id: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.INTEGER,
            },
            transaction_type: {
                type: Sequelize.STRING,
            },
            active: {
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
        {timestamps: false,}
    )

    transactions.prototype.fields = [
        'transaction_id',
        'shop_id',
        'player_id',
        'status',
        'transaction_type',
        'amount',
        'active',
        'created_at',
        'updated_at'
    ]
    transactions.prototype.fieldsSearchMetas = [
        'transaction_id',
        'shop_id',
        'player_id',
        'status',
        'transaction_type',
        'amount',
        'active',
        'created_at',
        'updated_at'
    ]

    return transactions;
}