import tarea from "../models/Task";

const RenderizarIndex =  async (req, res) => {
    //tareas guardadas 
    const tareaGuardadas = await tarea.find({}).lean();
    res.render('index', {tareaGuardadas: tareaGuardadas});

}

const nuevaTarea = async (req, res) => {
    try {
        const {title, description} = req.body;
        const task = new tarea({title, description}); //creamos una nueva tarea
        
        await task.save(); //guardamos la tarea en la base de datos
    
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}
const renderizarEditar = async (req, res) => {
    try {
        const task = await tarea.findById(req.params.id).lean();
        res.render("edit", {task});
        
    } catch (error) {
        console.log(error);
    }
}
const editarTarea = async (req, res) => {
    try {
        const {id} = req.params;
        await tarea.findByIdAndUpdate(id, req.body);
        res.redirect("/");
    }
    catch (error) 
    {
        console.log(error);
    }
}
const borrarTarea =async (req, res) => {
    try {
        const {id} = req.params;
        await tarea.findByIdAndDelete(id);
        res.redirect("/"); 
    } catch (error) {
        console.log(error);
    }
}
const tareaRealizada = async (req, res) => {
    const {id} = req.params;
    const task = await tarea.findById(id);
    task.done = !task.done;
    console.log(task.done);
    await task.save();
    res.redirect("/");
}










module.exports = {
    RenderizarIndex,
    
    nuevaTarea,
    renderizarEditar,
    editarTarea,
    borrarTarea,
    tareaRealizada
}
