/*global $, window*/
/*jslint browser: true, devel:true */

(function (exports, undefined) {
  'use strict';
  /**
   * Define a Namespace but check to see if it exists in the
   * window object first.
   * @type {[type]}
   */
  var MyNamespace = exports.MyNamespace || {};

  /**
   * Define a class name in the MyNamespace.
   * @type {Object}
   */

  MyNamespace.MyClassName = {
    init: function () {
      this.preInit();
      console.log('-> MyClassName Init');


      this.postInit();
    },
    preInit: function () {
      console.log('-> MyClassName PreInit');
      
    },
    postInit: function () {
      console.log('-> MyClassName PostInit');
      
    }
  };

  /**
   * Call the init
   */
  MyNamespace.MyClassName.init();


  /**
   * Export the updated Object back to the window.
   * @type {[type]}
   */
  exports.MyNamespace = MyNamespace;
}(window));