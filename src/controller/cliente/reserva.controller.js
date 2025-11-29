import router from "../../routes/index.routes";

router.use("/user", );

router.get("/user", (req, res) => {
    if (req.session !== null) {
        res.render('user/lista.suario', {
            users: [
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},
                {name: "", edad: 1},

            ] 
        })
    } else {
        res.render('error', {
            message: "No estas logueado"
        })
    }
}) 

router.post()
router.put()
router.delete()

