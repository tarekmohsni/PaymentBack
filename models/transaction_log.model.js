const {Sequelize} = require("sequelize");
module.exports= (sequelize, Sequelize) =>{
    const transactions_logs = sequelize.define('transactions_logs' , {
            transactions_log_id:{
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            transaction_id: {
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
            transaction_type: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.INTEGER,
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

    transactions_logs.prototype.fields =[
        'transactions_log_id',
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
    transactions_logs.prototype.fieldsSearchMetas =[
        'transactions_log_id',
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

    return transactions_logs;
}