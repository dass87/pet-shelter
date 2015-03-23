App.AnimalSexView = Ember.View.extend({
    tagName: "i",
    classNameBindings: ['sex-icon'],

    'sex-icon': function() {
        if (this.content === "F") {
            return "fa fa-venus text-danger";
        } else if (this.content === "M") {
            return "fa fa-mars text-primary";
        }
    }.property('content')
});
