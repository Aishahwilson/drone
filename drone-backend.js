var Cylon = require('cylon');

Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
    port: '192.168.1.1'
})
.device("drone", {
    driver: "ardrone",
connection: "ardrone"
})

.device("nav", {
        driver: "ardrone-nav",
connection: "ardrone"
})

.on("ready", fly);

//function fly(robot) {
//}

Cylon.start();

var bot;
function fly(robot) {
    bot = robot;

    bot.drone.config('general:navdata_demo', 'TRUE');

    bot.nav.on("navdata", function(data) {
        console.log(data);
    });

    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after (2*1000, function() {
        bot.drone.forward(0.1);
    });
    after(4*1000, function() {
        bot.drone.forward(0);
    });
    after (6*1000, function() {
        bot.drone.left(0.1);
    });
    after(10*1000, function() {
        bot.drone.left(0);
    });
    after(15*1000, function() {
        bot.drone.land(0);
    });
    after(20*1000, function() {
        bot.drone.stop();
    });

}

// Initialise the robot
/*Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {

}

Cylon.start();*/
