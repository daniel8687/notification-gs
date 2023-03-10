'use strict';

import fs from "fs";

export const submission = (req, res) => {
    try {
        let rawdataUser = fs.readFileSync('api/source/usersSubmissions.json');
        let usersData = JSON.parse(rawdataUser);
        let usersDataFilter = usersData.filter(x => x.subscribed.filter(y => y.category == req.body.category).length > 0);

        fs.readFile('api/source/logs.json', 'utf8', function readFileCallback(err, data){
            if (err){
                return res.status(500 ).json({status: 500 , message: "Internal Server Error: " + err.message}); 
            } 
            else {
                let obj = [];
                if(data.toString().length > 0) {
                    obj = JSON.parse(data);
                }

                usersDataFilter.forEach(user => {
                    user.subscribed.forEach(category => {
                        if(category.category == req.body.category) {
                            category.channels.forEach(channel => {
                                obj.push(
                                    {
                                        date: new Date(), 
                                        userId: user.id,
                                        userName: user.name,
                                        userEmail: user.email,
                                        userPhoneNumber: user.phoneNumber,
                                        category: category.category,
                                        channel: channel,
                                        message: req.body.message,
                                        messageStatus: "OK"
                                    }
                                );
                            });
                        }                        
                    });                    
                });
                let objJson = JSON.stringify(obj);                
                fs.writeFileSync('api/source/logs.json', objJson);
            }
        });

        return res.status(200).json({status: 200, message: "Ok"});
    }
    catch(e) {
        return res.status(500 ).json({status: 500 , message: "Internal Server Error: " + e.message});        
    }
};