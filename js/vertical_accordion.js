"use strict";!function(){var t=document.querySelectorAll(".team__name"),n=document.querySelectorAll(".team__accordion");$(t).each(function(){$(this).click(function(e){e.preventDefault(),$(n).not(e.target.nextElementSibling).hasClass("team__accordion--open")&&$(n).removeClass("team__accordion--open"),$(e.target.nextElementSibling).toggleClass("team__accordion--open"),$(t).not(this).hasClass("triangle-up")&&$(t).removeClass("triangle-up"),$(this).toggleClass("triangle-up")})})}();