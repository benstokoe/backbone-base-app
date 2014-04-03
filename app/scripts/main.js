/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'routes/router',
    'views/app'
], function (Backbone, Router, AppView) {

    var App = Backbone.View.extend({

        el: '#app',

        initialize: function() {

            this.router = new Router();

            this.handleRoutes();

            Backbone.history.start();
        },

        handleRoutes: function() {
            this.router.on('route:app', function() {
                var app = new AppView();
                app.render();

                this.$el.html(app.el);
            }, this);
        }
    });

    var app = new App();
});
