const express = require('express');

const router = express.Router();

const dataFile = require('../data/data.json');


router.get('/albums', (req, res) => {

    let pageAlbums = dataFile.albums;// [{}, {}, {}]
    let pagePhotos = [];
    let pageName = [];

    pageAlbums.forEach((albumsObj) => {
        pagePhotos = pagePhotos.concat(albumsObj.artwork);
        pageName = pageName.concat(albumsObj.albumname);
    })

    res.render('albums', {

        artwork: pagePhotos,
        albums: pageAlbums,
        pageTitle: "The BEATLES Studio Years - Albums",
        maxList: pageAlbums,
        albumTitle: pageName
    })
})

// router.get('/albums/:albumsid', (req, res) => {
//     let albumsArray = dataFile.albums;
//     let photos = [];
//     let albums = [];
//     let titles = [];

//     albumsArray.forEach((albumsObj) => {
//         if(albumsObj.shortname == req.params.albumsid) {

//             photos = photos.concat(albumsObj.artwork);
//             albums.push(albumsObj);

//             titles = titles.concat(albumsObj.albumname);
//             titles.push(albumsObj);
//         }
//     })

//     res.render('albums', {

//         artwork: photos,
//         albums: albums,
//         pageTitle: `The BEATLES Studio Years - ${albums[0].name}`,
//         pageID: "albumsDetail",
//         maxList: albumsArray,
//         titles: titles
//     })
// })

module.exports = router;