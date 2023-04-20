import * as preferenceService from '../services/preference-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

// This code defines a function to handle HTTP POST requests for creating a new preference,
//  checks if the request body contains a preference name, 
//  saves the preference to the database using a service, 
//  and returns a successful response with the saved preference object or an error response if there was an error.
export const post = async (req, res) => {
    try {
        const newPrefernce = req.body;
        if (!newPrefernce.prefernceName) {
            return setbodyMissingError(res);
        }
        const prefernce = await preferenceService.save(newPrefernce);
        setPostSuccessfulResponse(prefernce, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}

// code exports a function that retrieves all preferences using the preference service and 
// sends a successful response with the preferences in JSON format, or an error response if an error occurs.
export const get = async (req, res) => {
    try {
        const preferences = await preferenceService.getAll();
        setSuccessfulResponse(preferences, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

// code updates a preference object with a specific id and sends a successful
//  response if the update was successful, otherwise sends a not found error response.

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const prefrence = req.body;
        const updatedPrefernce = await preferenceService.update(id, prefrence);
        if (!updatedPrefernce) {
            return setnotFound(res);
        }
        setSuccessfulResponse(updatedPrefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// code exports an asynchronous function that removes a preference object with the given id and sends a 
// successful response with the removed object if it exists, or a not found response if it does not exist, 
// and sends an error response if an error occurs.

export const remove = async (req, res) => {
    try {
        const id = req.params.id;

        const removedPrefernce = await preferenceService.remove(id);
        if (!removedPrefernce) {
            console.log("here")
            return setnotFound(res);
        }
        setSuccessfulResponse(removedPrefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// code exports an asynchronous function that retrieves a preference document from the database by its ID.
export const getById = async (id) => {
    try {
        const preference = await Preference.findById(id);
        return preference;
    } catch (err) {
        throw err;
    }
}