"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}!function(){var n=document.querySelectorAll(".review");$(".feedback__switcher-link").each(function(){$(this).click(function(r){r.preventDefault();var e,t=this.closest(".feedback__switcher-link"),a=this.dataset.active,r=(e=a,_toConsumableArray(n).filter(function(r){return r.dataset.linkedWith===e}));a&&t&&r&&($(".small-avatar").removeClass("small-avatar--active"),$(".review").removeClass("review--active")),a&&t&&($(t.children).addClass("small-avatar--active"),$(r[0]).addClass("review--active"))})})}();