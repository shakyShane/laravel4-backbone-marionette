define( ['collections/Orders' ], function( Orders ) {

  describe( 'Setup ', function() {

    beforeEach( function() {
      this.orders = new Orders.All;
    });

    it( 'Module should be loaded', function() {
      expect( this.orders ).toBeDefined( );
    });

    it( 'Should be able to access the Dom though fixtures', function() {
      loadFixtures( 'html/app.html' );
      expect( $('#mainNav') ).toExist();
    });

    it( 'Should be able to access JSON though fixtures', function() {
      var data = getJSONFixture( 'json/data.json' );
      expect( data ).toBeDefined();
    });

  });

});