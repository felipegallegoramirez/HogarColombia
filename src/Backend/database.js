const mongoose = require('mongoose')

const Url='mongodb+srv://ProWeb2021:ProWeb2021@clusterprogweb.bq5v0.mongodb.net/homeColombia?retryWrites=true&w=majority'


mongoose.connect(Url)
    .then(db => console.log("DB is conect"))
    .catch(err => console.log("DB no conect"))


module.exports = mongoose