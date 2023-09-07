const usersDao = require('../bo/userbo');
let _itembo = new usersDao ; 

module.exports = {
    update : function (req, res, next) {
        _itembo.update(req, res, next)
    },
    find: function (req, res, next) {
        _itembo.find(req, res, next);
    },
    findById: function (req, res, next) {
        _itembo.findById(req, res, next);
    },
    save: function (req, res, next) {
        _itembo.save(req, res, next);
    },
    delete: function (req, res, next) {
        _itembo.delete(req, res, next);
    },
    signUp: function (req, res, next) {
        _itembo.signUp(req, res, next)
    },
    signIn: function (req, res, next) {
        _itembo.signIn(req, res, next)
    },
    getUserByToken: function (req, res, next) {
        _itembo.getUserByToken(req, res, next);
    },
    verifyToken: function (req, res, next) {
        _itembo.verifyToken(req, res, next)
    },
    // saveUser: function (req, res, next) {
    //     _itembo.saveUser(req, res, next)
    // },
    // validPassword: function (req, res, next) {
    //     _itembo.validPassword(req, res, next)
    // },
    insert_user: function (req, res, next){
        _itembo.insert_user(req, res, next)
    }
}