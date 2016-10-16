define(['tpl!templates/sheep.tpl'], function(template) {
    var Sheep = function(name, sex) {
        this._name = name;
        this._sex = sex;
        this._branded = false;
        this._species = 'sheep';
        this._parentIds = []; // father = 0, mother = 1

        // gets and sets are nicer to use
        this.setParentIds = function (id) { this._parentIds = id; };
        this.getParentIds = function () { return this._parentIds; };
        this.setId = function (id) { this._id = id; };
        this.getId = function () { return this._id; };
        this.getBranded = function () { return this._branded; }
        this.getSpecies = function () { return this._species; }
        this.getSex = function () { return this._sex; }
        this.getName = function () { return this._name; }

        this.brand = function ()
        {
            this._branded = true;
        };

        this.render = function ()
        {
            return template(
            {
                'id': this._id,
                'name': this._name,
                'sex': this._sex,
                'branded': (this._branded === true) ? 'branded' : 'unbranded',
                'father': this._parentIds[0],
                'mother':this._parentIds[1]
            });
        };
    };

    return Sheep;
});
