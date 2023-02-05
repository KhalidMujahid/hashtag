const { Router } = require("express")

// validations
const schema = require("../utils/validation");

const router = Router();

// base 
router.get("/",(req,res) => {
    res.status(200).render("index");
})

// portfolio details
router.get("/details",(req,res) => {
    res.status(200).render("portfolio-details");
})

// contact form
router.post("/submit",async (req,res) => {

    const { error } = schema.validate(req.body);

    if(error){
        return res.status(422).send(error.details[0].message);
    }
    
    console.log(req.body);
    return res.send(req.body);
})


module.exports = router;