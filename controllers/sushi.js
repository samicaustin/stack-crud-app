const express = require('express');
const router  = express.Router();
const Sushi  = require('../models/sushi');

// INDEX ROUTE
router.get('/', (req, res) => {
    Sushi.find({}, (err, allSushi)=>{
        if(err){
            console.log(err)
        }else{
            console.log(allSushi);
            res.render('index.ejs', {sushi: allSushi})
        }
    }
    )
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
    Sushi.findById(req.params.id, (err, oneSushi) => {
        if (err){
            console.log(err)
        } else {
            console.log(oneSushi);
            res.render('show.ejs', {sushi: oneSushi})
        }
    })
})

// CREATE ROUTE
router.post('/', (req, res) => {
    if(req.body.isRaw === 'on'){
        req.body.isRaw = true;
    }else{
        req.body.isRaw = false
    }
    Sushi.create(req.body, (err, newSushi) => {
        if(err){
            console.log(err)
        }else{
            console.log(newSushi)
            res.redirect('/sushi')
        }
    });
});

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs')
})






module.exports = router; 