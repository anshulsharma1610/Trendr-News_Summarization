import * as roleService from '../services/role-service.js';


// below code creates a new role and saves it in the database, then returns a successful response.
export const post = async (req, res) => {
    try {
        const newRole = req.body;
        const role = await roleService.save(newRole);
        setSuccessfulResponse(role, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// This code retrieves all roles and sends a successful response with the roles data.
export const get = async (req, res) => {
    try {
        const roles = await roleService.getAll();
        setSuccessfulResponse(roles, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
// This code updates a role by ID and sends the updated role as a response.
export const put = async (req, res) => {
    try {
        const id = req.body.id;
        const role = req.body;
        const updatedRole = await roleService.update(id, role);
        setSuccessfulResponse(updatedRole, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// This code exports a function that removes a role from the system by its ID provided as a query parameter, 
// and sends a successful response with the removed role data.
export const remove = async (req, res) => {
    try {
        const id = req.query.id;
        const removedRole = await roleService.remove(id);
        setSuccessfulResponse(removedRole, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// This function sets a successful HTTP response status code and 
// sends the provided object as a JSON response to the client.

const setSuccessfulResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}

// function sets an error response with status code 500 and a JSON object containing the error message.

const setErrorResponse = (err, res) => {
    res.status(500);
    res.json({
        error: {
            message: err.message
        }
    });
}
