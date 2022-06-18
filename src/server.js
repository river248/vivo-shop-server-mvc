import express from 'express'
import { apiV1 } from '~/routes/v1'

const bootServer = () => {
    const app = express()

    // Enable req.body data
    app.use(express.json())

    app.use(express.urlencoded({ extended: true }))

    // Use APIs v1
    app.use('/v1', apiV1)

    // app.listen(process.env.PORT, () => {
    //     console.log(`Hello Riverdev, I'm running at :${process.env.APP_PORT}/`)
    // })

    app.listen(8080, () => {
        console.log(`Hello Riverdev, I'm running at :${process.env.APP_PORT}/`)
    })
}

bootServer()
