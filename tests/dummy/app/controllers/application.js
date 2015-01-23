import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        increment: function() {
            console.log('Clicked increment');
        },
        decrement: function() {
            console.log('Clicked decrement');
        }
    }
});
