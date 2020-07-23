//create an express
const express = require('express');

//router method allows us to route back to app.js
const router = express.Router();

let dataFile = require('../data/data.json');

router.get('/', (req, res) => {

    let pageAlbums = dataFile.albums //dataFile is an object. Key is speakers.This will give us an array of objects

    let pagePhotos = []; //populate with all of the artwork

    pageAlbums.forEach((albumsObj) => {

        pagePhotos = pagePhotos.concat(albumsObj.artwork) //concat merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    }) //as it loops through it will grab an object

    res.render('index', {

        artwork: pagePhotos,
        pageID: 'home',
        maxList: pageAlbums
    });
})



//now we need to export the file (router.get) back to app.js
module.exports = router;