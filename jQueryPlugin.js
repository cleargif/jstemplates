/*global $, window, CanvasLoader, jQuery */
/*jslint browser:true, devel:true */

(function ($, undefined) {
  'use strict';
  $.myPluginName = function (el, options) {
    var plugin = this,
        init, preInit, postInit, defaults = {
        activated: function () {},
        before: function () {},
        after: function () {},
        ready: function () {}
        };

    init = function () {
      // Merge into new var
      var extOptions =  $.extend(true, defaults, options);
      plugin.el = $(el);
      extOptions.activated();

      preInit();
      console.log('-> myPluginName Init');


      postInit();
    };
    preInit = function () {
      console.log('-> myPluginName PreInit');

    };
    postInit = function () {
      console.log('-> myPluginName PostInit');

    };

    /**
     * Call the init
     */
    init();


  };
  $.fn.myPluginName = function (options) {
    return this.each(function () {
      (new $.myPluginName(this, options));
    });
  };
}(jQuery));