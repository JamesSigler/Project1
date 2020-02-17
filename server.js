//1.
var http = require('http');
var fs = require('fs');
var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: 'f3cffb1298c1436a9cf75c985772c11b',
    secret: '117867c35ad74649a9307ce0f61019c8'
});

var spotifyReturnData = spotify.search({ type: 'track', query: 'All the Small Things', limit: 1}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    spotifyReturnData = data.tracks.items;
    //console.log(spotifyReturnData);
    return data.tracks.items; 
});





//2.
var server = http.createServer(function (req, resp) {
    //3.
    req.url = '';
        
            
    if (req.url === "") {
        fs.readFile(__dirname + "/htmlFiles/index.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('Server Error');
        resp.end();
    }
});
//5.
server.listen(1337);

//console.log('Server Started listening on 5050');