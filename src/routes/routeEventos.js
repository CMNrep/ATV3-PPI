import { Router } from "express";
import EventosCtrl from "../controller/eventosCtrl.js";
const routeEventos = Router();
const eventosCtrl = new EventosCtrl()

routeEventos.get("/", eventosCtrl.consultar)
.get("/:parametroBusca", eventosCtrl.consultar)
.post("/", eventosCtrl.gravar)
.put("/", eventosCtrl.alterar)
.patch("/", eventosCtrl.alterar)
.delete("/", eventosCtrl.excluir);

export default routeEventos