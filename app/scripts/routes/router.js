/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var Routes = Backbone.Router.extend({
        routes: {
            '': 'app'
        }

    });

    return Routes;
});
