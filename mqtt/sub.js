

const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broket.hivemq.com');

client.on("connect", function () {
    client.subscribe("abc");
    console.log("successfully");
});

client.on("message", function (topic, message) {
    console.log(message.toString());
});

