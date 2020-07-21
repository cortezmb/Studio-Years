const express = require('express');

const router = express.Router();

const dataFile = require('../data/data.json');


router.get('/albums', (req, res) => {

    let pageAlbums = dataFile.albums;// [{}, {}, {}]
    let pagePhotos = [];

    pageAlbums.forEach((albumsObj) => {
        pagePhotos = pagePhotos.concat(albumsObj.artwork);
    })

    res.render('albums', {

        artwork: pagePhotos,
        albums: pageAlbums,
        pageTitle: "The BEATLES Studio Years - Albums",
        maxList: pageAlbums
    })
})

router.get('/albums/:albumsid', (req, res) => {
    let albumsArray = dataFile.albums;
    let photos = [];
    let albums = [];

    albumsArray.forEach((albumsObj) => {
        if(albumsObj.shortname == req.params.albumsid) {

            photos = photos.concat(albumsObj.artwork);
            albums.push(albumsObj);
        }
    })

    res.render('albums', {

        artwork: photos,
        albums: albums,
        pageTitle: `The BEATLES Studio Years - ${albums[0].albumname}`,
        pageID: "albumDetail",
        maxList: albumsArray
    })
})

module.exports = router;