let router = require("express").Router(),
    usersController = require("../controllers/users.controller");
    utilityController = require("../controllers/utility.controller");
    rolesController = require("../controllers/roles.controller");
    transactionsController = require("../controllers/transactions.controller");



let apiRouters = function (passport) {

    router.get(
        "/api/generateTokenForUser",
        utilityController.generateTokenForUser
    );
    router.post("/api/user/find/:params?", passport.authenticate('jwt', {session: false}), usersController.find);
    router.get("/api/user/findById/:entity_id", passport.authenticate('jwt', {session: false}), usersController.findById);
    router.put("/api/user/update", passport.authenticate('jwt', {session: false}), usersController.update);
    router.delete("/api/user/delete/:params", passport.authenticate('jwt', {session: false}), usersController.delete);
    router.post("/api/user/save", passport.authenticate('jwt', {session: false}), usersController.save);
    router.post("/api/user/verifyToken", passport.authenticate('jwt', {session: false}), usersController.verifyToken);

    router.post("/api/user/SignIn", usersController.signIn);
    router.post("/api/user/getUserByToken", usersController.getUserByToken);
     router.post("/api/user/saveUser",passport.authenticate('jwt', {session: false}), usersController.insert_user);
    // router.post("/api/user/validPassword", usersController.validPassword);

    router.post("/api/signup", usersController.signUp);
    router.post("/api/SignIn", usersController.signIn);

    router.post("/api/role/find/:params?", passport.authenticate('jwt', {session: false}), rolesController.find);
    router.get("/api/role/findById/:entity_id", passport.authenticate('jwt', {session: false}), rolesController.findById);
    router.put("/api/role/update", passport.authenticate('jwt', {session: false}), rolesController.update);
    router.delete("/api/role/delete/:params", passport.authenticate('jwt', {session: false}), rolesController.delete);
    router.post("/api/role/save", passport.authenticate('jwt', {session: false}), rolesController.save);

    router.post("/api/transaction/find/:params?", passport.authenticate('jwt', {session: false}), transactionsController.find);
    router.get("/api/transaction/findById/:entity_id", passport.authenticate('jwt', {session: false}), transactionsController.findById);
    router.put("/api/transaction/update", passport.authenticate('jwt', {session: false}), transactionsController.update);
    router.delete("/api/transaction/delete/:params", passport.authenticate('jwt', {session: false}), transactionsController.delete);
    router.post("/api/transaction/save", passport.authenticate('jwt', {session: false}), transactionsController.save);
    router.post("/api/transaction/savetransaction", passport.authenticate('jwt', {session: false}), transactionsController.saveTransaction);



    return router;

};

module.exports = apiRouters;
