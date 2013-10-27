'use strict';

/*global define*/
/*global describe*/
/*global it*/
/*global expect*/
define(['views/AppView'], function (AppView) {

    describe('Loading Module: ', function () {

        it('should be loaded', function () {
            expect(AppView).toBeDefined();
        });
    });
});