define([], function() {

  var Orders = { Models : {}, Views : {}, Collections : {}, CustomFunctions : {} };

  /**
   * ----------------------------------------------
   * Orders - Wrapper View
   * ----------------------------------------------
   */
  Orders.Views.Wrapper = Marionette.ItemView.extend( {
    template : '#'
  });

  /**
   * @returns {Array}
   */
  Orders.CustomFunctions.clearAll = function( ) {
    return [];
  };

  return Orders;

});