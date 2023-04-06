import * as roleService from '../services/role-service.js';

export const post = async (req, res) => {
    try {
        const newRole = req.body;
        const role = await roleService.save(newRole);
        setSuccessfulResponse(role, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const get = async (req, res) => {
    try {
        const roles = await roleService.getAll();
        setSuccessfulResponse(roles, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

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

export const remove = async (req, res) => {
    try {
        const id = req.query.id;
        const removedRole = await roleService.remove(id);
        setSuccessfulResponse(removedRole, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

const setSuccessfulResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}

const setErrorResponse = (err, res) => {
    res.status(500);
    res.json({
        error: {
            message: err.message
        }
    });
}
