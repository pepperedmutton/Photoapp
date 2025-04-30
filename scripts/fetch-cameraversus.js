import fs from "fs";
import { finished } from 'stream/promises';
import { Readable } from 'stream';

const HOST="https://api.cameravers.us/api"

let cameras = [];
let lenses = [];

/**
 * path must exist
 * 
 * @param {*} url 
 * @param {*} path 
 */
const downloadImage = async (url, path) => {
    let resp = await fetch(url);
    let fileStream = fs.createWriteStream(path, { flags: 'wx' });
    try {
        await finished(Readable.fromWeb(resp.body).pipe(fileStream));
    } catch (EEXIST) {
        // nothing to do if already there
        // console.log("Oops, already exist");
    }
} 

let data = {};

for (let thing of ["cameras", "lenses"]) {
    let currentPage = 1;
    let lastPage = 1;
    data[thing] = [];
    process.stdout.write(`fetching ${thing} data: `);
    do {
        process.stdout.write(currentPage.toString());

        let resp = await fetch(`${HOST}/${thing}?page=${currentPage}`);
        let body = await resp.json();

        lastPage = body.meta.last_page;
        
        body.data.forEach(async element => {
            // we only get first image here.
            let image = element.images[0];
            let thumb = element.images_thumbs[0];

            let imageName=element.name.replaceAll(' ','-').toLowerCase();
            let x = await downloadImage(thumb, `download/${imageName}.jpg`);
            data[thing].push({ name: element.name, image: `${imageName}.jpg` });
        });
        currentPage++;
    }
    while (currentPage < lastPage)
    console.log(" done");
}

console.log(data);
