'use strict';

import fs from "fs";

export const users = (req, res) => {
    try {
        let rawdataUser = fs.readFileSync('api/source/usersSubmissions.json');
        let user = JSON.parse(rawdataUser);

        res.send(user);
    }
    catch(e) {
        return res.status(500 ).json({status: 500 , message: "Internal Server Error: " + e.message});        
    }
};

export const categories = (req, res) => {
    try {
        let rawdataCategories = fs.readFileSync('api/source/categories.json');
        let categories = JSON.parse(rawdataCategories);

        res.send(categories);
    }
    catch(e) {
        return res.status(500 ).json({status: 500 , message: "Internal Server Error: " + e.message});        
    }
};