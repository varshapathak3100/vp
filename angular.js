/**
 * Created by varsha on 3/6/2017.
 */
var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("/skills", {
            templateUrl: "skills.html",
            controller: "skillCtrl"
        })
        .when("/projects", {
            templateUrl: "projects.html",
            controller: "projectCtrl"
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: "contactCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

app.controller("homeCtrl", function ($scope) {
    console.log("home page loaded");
});


app.controller("skillCtrl", function ($scope) {
    console.log("skills page loaded");
});

app.controller("projectCtrl", function ($scope, $window) {
    console.log("projects page loaded");

    $scope.open = function (proj) {
        // $window.alert($scope.ngVal);
        $scope.ngVal = true;
        $scope.projClicked = proj;
    };

    $scope.ok = function () {
        $scope.ngVal = false;
    };

    $scope.cancel = function () {
        $scope.ngVal = false;
    };

    $scope.projectsData = [
        {
            imgName: "ebay.png",
            projectName: "Ebay Marketplace Web Application",
            technology: "HTML5, CSS3, JavaScript, AngularJS, JQuery, Node.js, RabbitMQ, REST web services, MySQL , MongoDB",
            desc: "Developed eBay marketplace web application supporting following functionalities: login, " +
            "advertisements- registration and display, payment validation, passport.js for authentication. UI and" +
            " frontend technology used include HTML, CSS, Bootstrap and AngularJS. Node.js implemented for backend along" +
            " with MySQL and MongoDB database using REST APIs."
        },
        {
            imgName: "airbnb.png",
            projectName: "Airbnb Web Application",
            technology: "HTML5, CSS3, Bootstrap, JavaScript, AngularJS, JQuery, Node.js, RabbitMQ, REST web services, MySQL , MongoDB",
            desc: "Developed Airbnb modules – host, admin, users using AngularJS and Node.js. RabbitMQ used as messaging" +
            " platform for communication of frontend channels with backend systems. UI and backend technologies used include HTML5," +
            " CSS3, JavaScript, AngularJS, Node.js, REST APIs, MySQL, and MongoDB. "
        },
        {
            imgName: "stockanalyst.png",
            projectName: "Stock market end stop",
            technology: "HTML5, CSS3, Bootstrap, JavaScript, JQuery, Node.js",
            desc: "Website to provide stock market details to user. Web crawler designed to get the data to APIs" +
            " in Node.js. UI developed using HTML5, CSS3, and Bootstrap. ",
            link: "https://stocks-analyst.herokuapp.com/ "
        },
        {
            imgName: "spartaGuideApp.jpeg",
            projectName: "SJSU student oriented mobile application",
            technology: "Java, Android Studio, Firebase DB",
            desc: "A student-oriented android mobile application. Provides easy access to university related information" +
            " along with different services like book an appointment, get details of research work under different professors." +
            " UI developed using XML and backend code written in Java using Android Studio. ",
            link: "https://sway.com/jBLW2FJ3ZUeqPM4I"
        },
        {
            imgName: "sdn.png",
            projectName: "Software Defined IoT! - The Smart Way",
            technology: "Java, MySQL, Firebase DB, AWS, SDN, IoT",
            desc: "Developing an android application to remotely control various home used IoT devices." +
            " Providing smart routing using SDN controllers and cloud services to store device status data."
        },
        {
            imgName: "firewall.jpg",
            projectName: "User Configurable Firewall",
            technology: "Python, PyCharm",
            desc: "Firewall constructed using Python. Provides user with the ability to block packets on the basis" +
            " of incoming IP-addresses, destination port numbers and protocols. UI built using Python’s Tkinter"
        },
        {
            imgName: "breakoutgame.png",
            projectName: "Breaking brick wall game",
            technology: "HTML5, CSS3, Bootstrap, JavaScript",
            desc: "Player needs to break brick wall using the ball to gain points. Game was developed using HTML, CSS and JavaScript.",
            link: "http://breakoutgame.s3-website-us-east-1.amazonaws.com/"
        },
        {
            imgName: "box.jpg",
            projectName: "Student Portal",
            technology: "C, Linux",
            desc: "TCP Client-Server implementation using C socket-based programming in the Linux environment with thread creation. " +
            "Portal provides four features – download/upload reference material, take an online test, book an appointment " +
            "and chatroom service (multiple client-server architecture), using multithreading, concurrency, mutex locks " +
            "and interrupt handlers. "
        }
    ];

});


app.controller("contactCtrl", function ($scope, $http) {
    console.log("contact page loaded");

    $scope.send = function () {

        if (msg.value.length == 0 || msg.value.trim() == "") alert("Please enter some text to send a message. Thanks! :)");
        else {

            var msgValue = {
                msgVal:msg.value};
            // console.log(msgValue + "angular");
            $http.post('/send', msgValue).success(function(data, status) {
               if(data.length = "sent") alert("Message sent. Have a nice day!");
               else alert("Error in sending message");
               msg.value="";
            });
        }
    };

});