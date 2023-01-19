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

export const logs = (req, res) => {
    try {
        let rawdataLogs = fs.readFileSync('api/source/logs.json');
        let logs = JSON.parse(rawdataLogs);
        let logsSort = logs.sort(customSort);
        res.send(logsSort);
    }
    catch(e) {
        return res.status(500 ).json({status: 500 , message: "Internal Server Error: " + e.message});        
    }
};

const customSort = (a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}