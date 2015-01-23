import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',

    classNames: ['btn-group'],

    reverseOrdering: false,

    hideIncrement: false,

    hideDecrement: false,

    actions: {
        decrement: function() {
            this.sendAction('decrement');
        },
        increment: function() {
            this.sendAction('increment');
        }
    }
});

