/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| To configure your streaming, define the name of your radio, url and 
| type of your streaming below.
|
*/

var settings = {
    'radio_name': 'Bintang Tenggara',

    // URL of streaming
    'url_streaming': 'https://asv.alhastream.com/listen/radio_bintang_tenggara_2.0/radio',

    //NOW PLAYING AzuraCast API.
    'api_url': 'https://asv.alhastream.com/api/nowplaying/radio_bintang_tenggara_2.0',

    // Visit https://api.vagalume.com.br/docs/ to get your API key
    'api_key': '18fe07917957c289983464588aabddfb',

    // Set to true to get the last songs played
    'historic': true,

    // Only for SHOUTCast!
    // Set to true to show the next song to be played. 
    // Make sure your streaming show this information!
    'next_song': false,

    // Path to default cover art when none are found
    'default_cover_art': 'https://cdn.bintangtenggarafm.com/img/generic_song.jpg',
};
