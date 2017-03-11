"use strict";

var express = require('express'),
    app = require('express')(),
    app = express(),
    http = require('http'),
    sendmail = require('sendmail'),
    nodeMailer = require('nodemailer'),
    bodyParser = require("body-parser"),
    transport = require('nodemailer-smtp-transport');

app.use(bodyParser.json());
app.use("/node_modules", express.static('node_modules'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/angular.js', express.static(__dirname + '/angular.js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/home.html', express.static(__dirname + '/home.html'));
app.use('/skills.html', express.static(__dirname + '/skills.html'));
app.use('/projects.html', express.static(__dirname + '/projects.html'));
app.use('/contact.html', express.static(__dirname + '/contact.html'));
app.set('port', process.env.PORT || 3000);

// var smtpTransport = nodeMailer.createTransport("SMTP", {
//     service: "gmail",
//     auth: {
//         user: "spartaguidesjsu@gmail.com",
//         pass: "spartaguide123"
//     }
// });

app.get('/', function (req, res) {
    res.set({
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
    });
    res.sendFile(__dirname + '/varsha.html');
});

app.post('/send', function (req, res) {
    var msg = req.body.msgVal;
    // console.log(msg + "varsha");

    var smtpTransport = nodeMailer.createTransport(transport({
            service: 'Gmail',
            auth: {
                user: '<spartaguidesjsu@gmail.com>',
                pass: 'spartaguide123'
            }
        })
    );

    smtpTransport.sendMail({  //email options
        from: "spartaguidesjsu@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
        to: "varshapathak3100@gmail.com", // receiver
        subject: "Portfolio Message", // subject
        text: msg // body
    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Email Sent successfully");
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });

    res.send("sent");

});

app.listen(app.get('port'));
console.log("Server listening on port 3000");

