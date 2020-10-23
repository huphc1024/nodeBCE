const express = require('express')
const app = express()
const port = 3000
const auth = require('./controller/user-controller')
const mysql = require('./service/connect-mysql')

mysql.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine')
}).catch((err) => {
    console.log(err, "Something went wrong with the Database Update!")
})
app.use('/api/v1/', auth);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
