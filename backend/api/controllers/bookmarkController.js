import { save, put, remove, search,validationService} from '../services/bookmark-service.js';

export const post = async (request, response) => {
    try {
        const newBookmark = request.body;
            const savedbookmark = await save(newBookmark);
            const statusofsuccess=201
            newsetSuccessfulResponse(savedbookmark,statusofsuccess, response)        
    } catch (err) {
        setErrorResponse(err, response)
    }
}
export const getAll = async (request, response) => {
    try {
        const params = request.body;
        console.log(params); 
        const todolist = await search(params);
        setSuccessfulResponse(todolist, response);
    } catch (err) {
        setErrorResponse(err, response)
    }
}

export const removebyid = async (request, response) => {
    try {
        console.log(request);
        const todoid = request.params.id;

        const newvalidationcourse=await validationService(todoid);

             const courses=await remove(todoid);
             const msg="Record deleted successfully!";
             setSuccessfulResponse(msg, response)
    } catch (err) {
        setErrorResponse(err, response)
    }
}

export const putbyid = async (request, response) => {
    try {
        const todolist = request.body;
        const getid= request.params.id;
        const newvalidationcourse=await validationService(getid);
        const courses=await update(getid,todolist);
        setSuccessfulResponse(courses, response)
    } catch (err) {
        setErrorResponse(err, response)
    }
}

const setSuccessfulResponse = (obj, response) => {
    response.status(200);
    response.json(obj)
}

const setErrorResponse = (err,response) => {
    response.status(500);
    response.json({
        error: {
            message: err
        }
    })
}
const newsetSuccessfulResponse = (obj,statusofsuccess, response) => {
    response.status(statusofsuccess);
    response.json(obj)
}