// define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
//calling three functions and creating 3 with different values 
var album1 = make_album(" ishaque", "Album title 1");
var album2 = make_album("usman", "Album title 2");
var album3 = make_album("tariq", "Album artist 3", 10);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
