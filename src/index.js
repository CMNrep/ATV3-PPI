import express from "express";
import routeEventos from "./routes/routeEventos.js";

const app = express()
const host = '0.0.0.0'
const port = 4000

app.use(express.json())

app.use('/eventos', routeEventos)

app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
})