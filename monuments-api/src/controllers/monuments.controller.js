import { allMonuments, addMonument } from '../services/monuments.service.js';

export const getMons = (req, res) => {
    const monArray = allMonuments();
    return res.status(200).json(monArray);
}

export const addMon = (req, res) => {
    //read the input data from the http request body
    const mon = req.body;
    if (mon) {
        addMonument(mon);
        res.status(201).json({
            message: "Monument added successfully"
        })
    } else {
        res.status(400).json({
            message: "Missing monument"
        })
    }
}