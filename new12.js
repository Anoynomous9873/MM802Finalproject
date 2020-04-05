// Create a variable that stores the manifest files
var manifestUri1 = 'http://199.116.235.210/curl/nawa/finland_manifest.mpd';
var manifestUri2 = 'http://199.116.235.210/curl/nawa/grassland_manifest.mpd';
var manifestUri3 = 'http://199.116.235.210/curl/nawa/manifest.mpd';
var manifestUri4 = 'http://199.116.235.210/birdisland_dashinit/birdisland_manifest.mpd';
var manifestUri5 = 'http://199.116.235.210//jet_dashinit/jet_manifest.mpd';
var manifestUri6 = 'http://199.116.235.210/curl/nawa/surfing_manifest.mpd';
var manifestUri7 = 'http://199.116.235.210/curl/nawa/timelapse_manifest.mpd';
var manifestUri8 = 'http://199.116.235.210/ladakh_dashinit/ladakh_manifest.mpd';
var manifestUri9 = 'http://199.116.235.210/paris_dashinit/paris_manifest.mpd';

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();
  
	// Debug logs, when the default of INFO isn't enough:
	shaka.log.setLevel(shaka.log.Level.DEBUG);

	// Verbose logs, which can generate a lot of output:
	shaka.log.setLevel(shaka.log.Level.V1);

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

function initPlayer() 
{
	
  // FIRST INSTANCE //
  var video = document.getElementById('video');   // Create a Player instance.
  var player = new shaka.Player(video);
  video.onprogress = function()
	{
		var w = 100*(video.buffered.end(0))/video.duration; // if the video buffered is more than 6th part of total 
		if(w >= video.duration/6) 
		{
			player.configure('streaming.bufferingGoal', 120); // push data packets worth 2 minutes
		}
	}
  window.player = player;  // Attach player to the window to make it easy to access in the JS console.

  player.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player.load(manifestUri1).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);  // onError is executed if the asynchronous load fails.
  
  
  
  // SECOND INSTANCE //
  var video2 = document.getElementById('video2');   // Create a Player instance.
  var player2 = new shaka.Player(video2);
  video2.onprogress = function()
	{
		var w2 = 100*(video2.buffered.end(0))/video2.duration;
		if(w2 >= video2.duration/6)
		{
			player2.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player2 = player2;  // Attach player to the window to make it easy to access in the JS console.

  player2.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player2.load(manifestUri2).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
 
  
  
  // THIRD INSTANCE //
  var video3 = document.getElementById('video3');   // Create a Player instance.
  var player3 = new shaka.Player(video3);
  video3.onprogress = function()
	{
		var w3 = 100*(video3.buffered.end(0))/video3.duration;
		if(w3 >= video3.duration/6)
		{
			player3.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player3 = player3;  // Attach player to the window to make it easy to access in the JS console.

  player3.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player3.load(manifestUri3).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  
  // FOURTH INSTANCE //
  var video4 = document.getElementById('video4');   // Create a Player instance.
  var player4 = new shaka.Player(video4);
  video4.onprogress = function()
	{
		var w4 = 100*(video4.buffered.end(0))/video4.duration;
		if(w4 >= video4.duration/6)
		{
			player4.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player4 = player4;  // Attach player to the window to make it easy to access in the JS console.

  player4.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player4.load(manifestUri4).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  
  // FIFTH INSTANCE //
  var video5 = document.getElementById('video5');   // Create a Player instance.
  var player5 = new shaka.Player(video5);
  video5.onprogress = function()
	{
		var w5 = 100*(video5.buffered.end(0))/video5.duration;
		if(w5 >= video5.duration/6)
		{
			player5.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player5 = player5;  // Attach player to the window to make it easy to access in the JS console.

  player5.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player5.load(manifestUri5).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  
  // SIXTH INSTANCE //
  var video6 = document.getElementById('video6');   // Create a Player instance.
  var player6 = new shaka.Player(video6);
  video6.onprogress = function()
	{
		var w6 = 100*(video6.buffered.end(0))/video6.duration;
		if(w6 >= video6.duration/6)
		{
			player6.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player6 = player6;  // Attach player to the window to make it easy to access in the JS console.

  player6.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player6.load(manifestUri6).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  
  // SEVENTH INSTANCE //
  var video7 = document.getElementById('video7');   // Create a Player instance.
  var player7 = new shaka.Player(video7);
  video7.onprogress = function()
	{
		var w7 = 100*(video7.buffered.end(0))/video7.duration;
		if(w7 >= video2.duration/6)
		{
			player7.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player7 = player7;  // Attach player to the window to make it easy to access in the JS console.

  player7.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player7.load(manifestUri7).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  // EIGTH INSTANCE //
  var video8 = document.getElementById('video8');   // Create a Player instance.
  var player8 = new shaka.Player(video8);
  video8.onprogress = function()
	{
		var w8 = 100*(video8.buffered.end(0))/video8.duration;
		if(w8 >= video8.duration/6)
		{
			player8.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player8 = player8;  // Attach player to the window to make it easy to access in the JS console.

  player8.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player8.load(manifestUri8).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
  // NINTH INSTANCE //
  var video9 = document.getElementById('video9');   // Create a Player instance.
  var player9 = new shaka.Player(video9);
  video9.onprogress = function()
	{
		var w9 = 100*(video9.buffered.end(0))/video9.duration;
		if(w9 >= video9.duration/6)
		{
			player9.configure('streaming.bufferingGoal', 120);
		}
	}
  window.player9 = player9;  // Attach player to the window to make it easy to access in the JS console.

  player9.addEventListener('error', onErrorEvent);  // Listen for error events.
  
  player9.load(manifestUri9).then(function() // This is an asynchronous process.
  {
    console.log('The video has now been loaded!');// This runs if the asynchronous load is successful.
  }).catch(onError);
  
  
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);
