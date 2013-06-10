define( ['collections/Orders' ], function( Orders ) {

  describe( 'Setup ', function() {

    it( 'Module should be loaded', function() {
      expect( Orders ).toBeDefined( );
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