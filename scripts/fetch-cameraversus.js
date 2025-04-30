
const HOST="https://api.cameravers.us"
const CAMERA_PATH="/api/cameras"
const LEN_PATH="/api/lens"
const PAGE_SIZE=15

// https://api.cameravers.us/api/cameras?name=&filters={%22brand%22:[]}%20%20%20%20%20%20&sort=name_asc%20%20%20%20%20%20&page=4
let resp = await fetch(`${HOST}${CAMERA_PATH}`);
let rc = resp.statusCode;
let body = await resp.json();

console.log(body);

body.data.forEach(element => {
    console.log(`${element.id}: ${element.name}`);
});
    console.log(`
    console.log(`${element.id}: ${element.name}`);
});