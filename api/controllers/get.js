'use strict';

import fs from "fs";

export const userInformation = (req, res) => {
    let rawdataUser = fs.readFileSync('api/source/user.json');
    let user = JSON.parse(rawdataUser);
    user.subscribed = [];

    let rawdataUserSubmissions = fs.readFileSync('api/source/submissions.json');
    if(rawdataUserSubmissions.toString().length > 0) {
        let userSubmissions = JSON.parse(rawdataUserSubmissions);
        let userSubmissionsFilter = userSubmissions.filter(x => x.userId == 123);
        if(userSubmissionsFilter.length == 1) {
            user.subscribed = userSubmissionsFilter[0].subscribed;
        }
    }
    res.send(user);
};

export const categories = (req, res) => {
    let rawdataCategories = fs.readFileSync('api/source/categories.json');
    let categories = JSON.parse(rawdataCategories);

    res.send(categories);
};

export const channels = (req, res) => {
    let rawdataChannels = fs.readFileSync('api/source/channels.json');
    let channels = JSON.parse(rawdataChannels);
    
    res.send(channels);
};