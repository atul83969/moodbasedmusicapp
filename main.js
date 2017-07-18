//var currentSongNumber = 1;
//var willLoop = 0;
//var willShuffle = 0;
//genre check
var happy=0;
var sad=0;
var romantic=0;
var party=0;
function toggleSong() {
  //function KEY WORD IS USED TO START THE function
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.mood').removeClass('hidden');
    } else {
          }    //empty search box  nahi chlega koi name jiski lenghth 2 se zada hai dena pade gi
          $('#name-input').addClass('error');
});


$('.mood ').on('click', function() {
  $('.mood').addClass('hidden');
  $('.main').removeClass('hidden');
});
//Trigger Song on click play icon
$('.play-icon').on('click', function() {
  toggleSong();

});
//Trigger spacebar controls
$('body').on('keypress', function(event) {
  var target = event.target;
            if (event.keyCode == 32 &&target.tagName !='INPUT') {
            toggleSong();
          }
        });
function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}
        function updateCurrentTime() { //current time kaise update hoye ga
var song = document.querySelector('audio');
// console.log(song.currentTime);
// console.log(song.duration);
var currentTime = Math.floor(song.currentTime);
currentTime = fancyTimeFormat(currentTime);
var duration = Math.floor(song.duration);
duration = fancyTimeFormat(duration);
$('.time-elapsed').text(currentTime);
$('.song-duration').text(duration);
}



var songs_happy = [{ // har play list  ka different object bna dye hai
    'name': 'Teri akhiyan',
    'artist': 'A-bazz',
    'album': 'Specify album',
    'duration': '5:22',
   'fileName': 'songg.mp3',
   'image': 'imgg.jpg'
},
{
    'name': 'Naina',
    'artist': 'Kamal Khan',
    'album': 'Jatt and juliet',
    'duration': '4:18',
    'fileName': 'songg1.mp3',
    'image': 'imgg1.jpg'
},
{
    'name': 'haan tu hain',
    'artist': 'Emraan HAshmi',
    'album': 'Jannat',
    'duration': '5:24',
    'fileName': 'songg3.mp3',
    'image': 'imgg3.jpg'
},
{
    'name': 'College wali GT road',
    'artist': 'sharry mann',
    'album': 'AAte di chiri',
    'duration': '4:53',
    'fileName': 'songg2.mp3',
    'image': 'imgg2.jpg'
}]
var songs_sad = [{
  'name': 'Putt Han Garib Jatt Da',
  'artist': 'Veet Baljit',
  'album': 'Hero',
  'duration': '4:15',
  'fileName': 'song 13.mp3',
  'image': 'img0.jpg'
},
{
    'name': 'Desi desi na bolya kar',
    'artist': 'Md Kd',
    'album': 'single track',
    'duration': '3:36',
    'fileName': 'song6.mp3',
    'image': 'img10.jpg'
},
{
    'name': 'ki faida',
    'artist': 'Gill Ranjodh',
    'album': 'Ki faida',
    'duration': '3:35',
    'fileName': 'song12.mp3',
    'image': 'img9.jpg'
},
{
    'name': 'Kabhi Kabhi mere dil me',
    'artist': 'Specify album artist',
    'album': 'Specify album',
    'duration': '6:48',
    'fileName': 'song13.mp3',
    'image': 'img4.jpg'
}]
var songs_romantic = [{
    'name': 'Tere sang yara',
    'artist': 'Atif Aslam',
    'album': 'Rustom',
    'duration': '4:51',
   'fileName': 'song1.mp3',
   'image': 'img1.jpg'
},
{
    'name': 'Sawar loon',
    'artist': 'Monali Thakur',
    'album': 'Lootera',
    'duration': '4:15',
    'fileName': 'song2.mp3',
    'image': 'image4.jpg'
},
{
    'name': 'Pehli nazar mein',
    'artist': 'Atif Aslam',
    'album': 'Race',
    'duration': '5:13',
    'fileName': 'song10.mp3',
    'image': 'img8.jpg'
},
{
    'name': 'Kadar',
    'artist': 'Mankirt Aulakh',
    'album': 'single track',
    'duration': '3:09',
    'fileName': 'song11.mp3',
    'image': 'img7.jpg'
}]
var songs_party = [{
    'name': 'Rain Over Me',
    'artist': 'Pitbull',
    'album': 'Pitbull [WikiSeda]',
    'duration': '3:38',
   'fileName': 'song8.mp3',
   'image': 'img6.jpg'
},
{
    'name': 'Badli Badli Laage',
    'artist': 'Vicky Gajla',
    'album': 'Specify album',
    'duration': '2:52',
    'fileName': 'song4.mp3',
    'image': 'img2.jpg'
},
{
    'name': 'Mulakaat',
    'artist': 'Vijay Verma',
    'album': 'specify album',
    'duration': '4:45',
    'fileName': 'song3.mp3',
    'image': 'img3.jpg'
},
{
    'name': '3 peg',
    'artist': 'Sharry mann',
    'album': '3 peg',
    'duration': '3:24',
    'fileName': 'song7.mp3',
    'image': 'image5.jpg'
}]

function changeCurrentSongDetails(songObj) {
$('.current-song-image').attr('src',songObj.image)
$('.current-song-name').text(songObj.name)
$('.current-song-album').text(songObj.album)
}

function addSongNameClickEvent(songObj,position) {
  var songName = songObj.fileName;
 var id = '#song' + position;
 $(id).click(function() {
 var audio = document.querySelector('audio');//audio ko select karne k badh variable audio mai rakh dega
 var currentSong = audio.src;
 if(currentSong.search(songName) != -1)
  {
   toggleSong();
   changeCurrentSongDetails(songObj);
  }
 else {
   audio.src = songName;
   toggleSong();
   changeCurrentSongDetails(songObj);
   $('#now-playing').removeClass('main');
   setTimeout(function(){
     $('#now-playing').addClass('main');
   },);
   console.log("");

    }
  });
}
function whichPlaylist(){ //konsi playlist play honi hai click pae

    if(happy == 1){

        songs = songs_happy;
    }
    else if(sad == 1){
        console.log("chill run");
        songs = songs_sad;
    }

    else if(romantic == 1){
        console.log("rock run");
        songs = songs_romantic ;
    }

    else if( party== 1){

        songs = songs_party ;
    }



    return songs;
}
function updateSongList(){
    songs=whichPlaylist();
    console.log(songs[1]);

    for(var i =0; i < songs.length;i++) {// initally 0 se start ho kar  tab tak chle gi jab tak uski length songs.lenght s e kam hai
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);


       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1)
     }

     $('#songs').DataTable(
       {
           paging: false
       }
     );


}


//Code for genre based categorisation begins!! Using global variables and setting them here!


$('#happy').on('click',function(){
   if(typeof songs_table != 'undefined' ){
      songs_table.destroy();
   }
    happy=1;
    sad=romantic=party=0;
    updateSongList();
    $('.mood-sorting').addClass('hidden');
    $('.content').removeClass('hidden');

});


$('#sad').on('click',function(){
       if(typeof songs_table != 'undefined'){
        songs_table.destroy();
    }
    sad=1;
    happy=romantic=party=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});

$('#romantic').on('click',function(){
     if(typeof songs_table != 'undefined'){
       songs_table.destroy();
    }
    romantic=1;
    happy=sad=party=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});


$('#party').on('click',function(){
       if(typeof songs_table != 'undefined'){
        songs_table.destroy();
    }
    party=1;
    happy=sad=romantic=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});
$('#back').on('click',function(){

    $('.content').addClass('hidden');
    $('.mood').removeClass('hidden');

$('.main').addClass('hidden');

    song = document.querySelector('audio');
          song.pause();

  })




window.onload = function() {

setInterval(function(){

updateCurrentTime();

},1000);




}
