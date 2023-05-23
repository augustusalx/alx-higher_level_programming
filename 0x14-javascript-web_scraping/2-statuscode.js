#!/usr/bin/node
// This is the status code of a GET request

const request = require('request');

const urlToRequest = process.argv[2];

request.get(urlToRequest, function (error, response) {
  if (error == null) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.log(error);
  }
});
