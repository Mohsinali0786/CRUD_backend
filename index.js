const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes')
const dotenv = require('dotenv')

const bodyParser = require('body-parser')


// app.use(fileupload({useTempFiles: true}))

app.use(express.json());
app.use(bodyParser.json())

dotenv.config({ path: "./config/config.env" })

app.use(express.urlencoded({ limit: '10000mb', extended: true }))
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Err===>', err)
    })


app.use(cors());
app.use("/api", userRoutes)
app.listen(process.env.PORT || 8080, () => {
    console.log(`App is running ${process.env.PORT}`)
})