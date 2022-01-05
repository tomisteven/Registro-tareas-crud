import  {Router}  from "express";
import async from "hbs/lib/async";
import {  borrarTarea, renderizarEditar, editarTarea, nuevaTarea, RenderizarIndex, tareaRealizada } from "../controllers/taskController";

//importamos el controlador
//rutas de la api

const router = Router();

router.get("/", RenderizarIndex)

router.post("/tasks/add", nuevaTarea)
router.get("/task/:id/edit", renderizarEditar) 

router.post("/task/:id/edit", editarTarea)
router.get("/task/:id/delete", borrarTarea)

router.get("/task/:id/toggleDone", tareaRealizada)

export default router;