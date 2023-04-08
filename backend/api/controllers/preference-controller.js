import * as preferenceService from '../services/preference-service.js';

export const post = async (req, res) => {
    try {
        const newPrefernce = req.body;
        const prefernce = await preferenceService.save(newPrefernce);
        setSuccessfulResponse(prefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const get = async (req, res) => {
    try {
        const preferences = await preferenceService.getAll();
        setSuccessfulResponse(preferences, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.body.id;
        const prefrence = req.body;
        const updatedPrefernce = await preferenceService.update(id, prefrence);
        setSuccessfulResponse(updatedPrefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.body.id;
        const removedPrefernce = await preferenceService.remove(id);
        setSuccessfulResponse(removedPrefernce, res);
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
