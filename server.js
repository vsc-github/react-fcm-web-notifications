/**
 * Created by vishwas3 on 3/8/17.
 */

var express = require('express');
var request = require('request');
var server = express();

server.get('/api/notify/:fcm', function (req, res) {
    var to = req.params.fcm;
    return notify(res, to);
});

server.get('/api/notify-with-delay/:fcm', function (req, res) {

    setTimeout((function () {
        var to = req.params.fcm;
        return notify(res, to);
    }), 3000);

})

server.use('/', express.static(__dirname + '/build'));

function notify(res, to) {
    var key = 'AAAAaxzCIxA:APA91bEjujdjrAqHhPb9MWtEpaMCKxa0i--K4KPfR5dtXqkhlmbtLOqm705_-NJ6kUOYqRwOBvurJId9yyr2UNkClgltWARrjYlcByXGE5wjaIMdBNZLf8irwiubOej79v461wnHJrM78LoZkRyLW4Wp2cNRYS1Vcg';
    var notification = {
        'title': 'Wow! This works like a charm.',
        'body': 'What sorcery is this?',
        'icon': 'https://cdn.dextra.art/website/assets/1501776716680-image.jpg',
        'click_action': 'http://localhost:8080'
    };

    request({
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'notification': notification,
            'to': to
        })
    }, function (error, response, body) {
        if (error) {
            console.log("Error in post request!", error);
            res.send('Send notification response: ', error);
            res.status(500).send(error);
        } else {
            console.log("No error, body.", body);
            res.status(200).send(body);
        }
    });
}
var port = process.env.PORT || 8080;
server.listen(port);
