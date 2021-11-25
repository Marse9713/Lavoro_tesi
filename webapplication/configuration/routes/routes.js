module.exports = app => {

    const controller = require("../controller/controller.js");

    var router = require("express").Router();

    router.get("/clienti", controller.getAllClient);

    router.get("/client/:id", controller.getClientId);

    router.post("/clienti", controller.createClient);

    router.put("/clienti/:id", controller.updateClientId);

    router.delete("/clienti/:id", controller.deleteClientId);

    app.use("/", router);

};