/*
Question 40: Album: Create objects for music albums.
*/
// interface Album {
//     artist: string;
//     title: string;
//     numTracks?: number; 
//   }
//   function createAlbum(artist: string, title: string, numTracks?: number): Album {
//     return {
//       artist,
//       title,
//       numTracks: numTracks || undefined, 
//     };
//   }
//   //creating 2 albums
//   const album1 = createAlbum("Artist1", "Album Title");
//   const album2 = createAlbum("Artist2", "Album Title2", 10);
//   //printing album
//   console.log(album1); 
//   console.log(album2); 
/*
Question 41: Magicians: Display magician names from an array.
*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["hamza", "danial", "ahmed"];
show_magicians(magician);
/*
Question 42: Great Magicians: Add "the Great" to magician names.
*/
var magicians2 = ["umar", "peer", "sufyan"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magician); // Modifies the original array
show_magicians(magician); // Shows modified names
// function make_great1(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }
// make_great1(magician); // Modifies the original array
// show_magicians(magician); // Shows modified names
