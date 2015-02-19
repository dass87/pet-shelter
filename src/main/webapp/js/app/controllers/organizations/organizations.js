App.OrganizationsController = Ember.ArrayController.extend({
    actions: {
        pushSort: function (attribute) {
            if (this.get("sortProperties.firstObject") === attribute) {
                this.toggleProperty("sortAscending");
            } else {
                this.set("sortProperties", [attribute]);
            }
        }
    }
});



