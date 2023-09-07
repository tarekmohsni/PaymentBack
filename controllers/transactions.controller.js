const transactionsDao = require('../bo/transactionsbo');
let transactionsDaoInst = new transactionsDao;

module.exports = {
    update : function (req, res, next) {
        transactionsDaoInst.update(req, res, next)
    },
    find: function (req, res, next) {
        transactionsDaoInst.find(req, res, next);
    },
    findById: function (req, res, next) {
        transactionsDaoInst.findById(req, res, next);
    },
    save: function (req, res, next) {
        transactionsDaoInst.save(req, res, next);
    },
    delete: function (req, res, next) {
        transactionsDaoInst.delete(req, res, next);
    },
    saveTransaction: function (req, res, next){
        transactionsDaoInst.saveTransaction(req, res, next)
    }

}