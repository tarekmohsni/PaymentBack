const {baseModelbo} = require('./basebo');
const request = require('request');

class Transactionsbo extends baseModelbo {
    constructor() {
        super('transactions', 'transaction_id');
        this.baseModal = "transactions";
        this.primaryKey = 'transaction_id';
    }

    saveTransaction(req, res, next) {
        let player_id = req.body.player_id;
        let shop_id = req.body.shop_id;
        let amount = req.body.amount;
        let transaction_type = req.body.transaction_type;
        let data = req.body;
        this.checkClient(data).then(player => {
            if(player.success){
                this.db['transactions'].build({data}).save().then(result => {
                    if (result) {
                        this.saveDeposit(result).then(deposit=>{
                            if(deposit.success){
                                res.send({
                                    success: true,
                                    data: result
                                })
                            }else {
                                res.send({
                                    success: false,
                                    message: "error dépôt"
                                })
                            }

                        })

                    } else {
                        res.send({
                            success: false,
                            message: 'we cant save transaction'
                        })
                    }

                }).catch(err => {
                    return this.sendResponseError(res, ['Error.AnErrorHasOccuredSaveUser'], 0, 403);
                })
            }else {
                res.send({
                    success: false,
                    message: "le joueur n'exist pas "
                })
            }


        })


    }

    checkClient = (data) => {
        return new Promise((resolve, reject) => {
            const options = {
                uri: "http://localhost:3001/Bets/PaymentsCallback/?command=check&account=" + data.player_id + "&currency=DT",
                method: 'GET',
                json: true,
            };

            request(options, function (error, response, body) {
                if (body && body.response.code === 0) {
                    resolve({
                        success: true,
                    })
                } else {
                    resolve({
                        success: false
                    })
                }
            });
        })

    }

    saveDeposit = (data) => {
        return new Promise((resolve, reject) => {
            const options = {
                uri: "http://localhost:3001/Bets/PaymentsCallback/?command=pay&account=" + data.player_id + "&amount=" + data.amount + "&currency=DT&txn_id="+data.transaction_id,
                method: 'GET',
                json: true,
            };

            request(options, function (error, response, body) {
                if (body && body.response.code === 0) {
                    resolve({
                        success: true,
                    })
                } else {
                    resolve({
                        success: false
                    })
                }
            });
        })
    }

    checkTransactionStatus = (data) => {
        return new Promise((resolve, reject) => {
            const options = {
                uri: "http://localhost:3001/Bets/PaymentsCallback/?command=status",
                method: 'GET',
                json: true,
                body: data
            };

            request(options, function (error, response, body) {
                if (body && body.response.code === 0) {
                    resolve({
                        success: true,
                    })
                } else {
                    resolve({
                        success: false
                    })
                }
            });
        })
    }

    cancelTransaction = (data) => {

    }


}

module.exports = Transactionsbo;
