"use strict";var player,playerContainer=$(".player"),eventsInit=function(){$(".player__start").click(function(e){e.preventDefault(),playerContainer.hasClass("paused")?player.pauseVideo():player.playVideo()}),$(".player__playback").click(function(e){var a=$(e.currentTarget),e=e.originalEvent.layerX/a.width()*100,a=player.getDuration()/100*e;$(".player__playback-button").css({left:"".concat(e,"%")}),player.seekTo(a)}),$(".player__splash").click(function(e){player.playVideo()})},formatTime=function(e){var e=Math.round(e),a=t(Math.floor(e/60)),e=t(e-60*a);function t(e){return e<10?"0".concat(e):e}return"".concat(a," : ").concat(e)},onPlayerReady=function(){var t=player.getDuration();$(".player__duration-estimate").text(formatTime(t)),setInterval(function(){var e=player.getCurrentTime(),a=e/t*100;$(".player__playback-button").css({left:"".concat(a,"%")}),$(".player__duration-completed").text(formatTime(e))},1e3)},onPlayerStateChange=function(e){switch(e.data){case 1:playerContainer.addClass("active"),playerContainer.addClass("paused");break;case 2:playerContainer.removeClass("active"),playerContainer.removeClass("paused")}};function onYouTubeIframeAPIReady(){player=new YT.Player("yt-player",{height:"405",width:"660",videoId:"Wi8e5T4i61Y",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange},playerVars:{controls:0,disablekb:0,showinfo:0,rel:0,autoplay:0,modestbranding:0}})}eventsInit();var soundLevel,mute=$(".player__mute"),MAX_VOLUME=100;$(".player__volume--button").css({left:"".concat(MAX_VOLUME,"%")}),$(".player__volume").click(function(e){var a=$(e.currentTarget),e=e.originalEvent.layerX/a.width()*100,a=player.setVolume(e);$(".player__volume--button").css({left:"".concat(e,"%")}),player.setVolume(a)}),$(mute).click(function(e){player.isMuted()?($(".player__volume--button").css({left:"".concat(soundLevel,"%")}),player.unMute()):(soundLevel=player.getVolume(),$(".player__volume--button").css({left:"0"}),player.mute())});