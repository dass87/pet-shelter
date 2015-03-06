/*
 * 
    @author Vítor Martins - varmartins@varmartins.com
*/

App.Organization = DS.Model.extend({
    created:       DS.attr(),
    updated:       DS.attr(),
    name:          DS.attr('string'),
    user:          DS.hasMany('user', { async: true }),

    recordDate: function () {
        return moment(this.get("created")).format('MMMM Do YYYY, h:mm:ss a');
    }.property("content.created")
});