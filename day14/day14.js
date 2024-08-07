/*
Question 40: Album: Create objects for music albums.
*/
function createAlbum(artist, title, numTracks) {
    return {
        artist,
        title,
        numTracks: numTracks || undefined,
    };
}
//creating 2 albums
const album1 = createAlbum("Artist1", "Album Title");
const album2 = createAlbum("Artist2", "Album Title2", 10);
//printing album
console.log(album1);
console.log(album2);
/*
Question 41: Magicians: Display magician names from an array.
*/
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
let magician = ["hamza", "danial", "ahmed"];
show_magicians(magician);
/*
Question 42: Great Magicians: Add "the Great" to magician names.
*/
const magicians2 = ["umar", "peer", "sufyan"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magician); // Modifies the original array
show_magicians(magician); // Shows modified names
export {};
