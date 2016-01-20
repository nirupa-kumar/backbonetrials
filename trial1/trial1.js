/**
 * Created by nirupak on 1/20/16.
 */
(function($){

    var Trial1View = Backbone.View.extend({
        el: $('body'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function(){
            $(this.el).append("<h1>Trial 1 : Hello World!</h1>");

        }

    });

    var trial1View =  new Trial1View();

})(jQuery);