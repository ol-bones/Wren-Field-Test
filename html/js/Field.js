define(['tpl!templates/field.tpl'], function (template)
{
    var Field = function ()
    {
        var Sheep = require("Sheep");
        this._uid = 0;
        this._animals = [];

        this.add = function (animal)
        {
            animal.setId(++this._uid);
            this._animals.push(animal);
        };

        this.isSpecies = function (animal, index, array)
        {
            if (typeof (animal.getSpecies()) != "string") { return false; }
            return animal.getSpecies() === this.toString();
        };

        this.isBranded = function (animal, index, array)
        {
            if (typeof (animal.getBranded()) != "boolean") { return false; }
            return animal.getBranded() === false;
        };

        this.isSex = function(animal, index, array)
        {
            if(typeof(animal.getSex()) != "string") { return false; }
            return animal.getSex() === this.toString();
        };

        this.getAnimalsByType = function (type)
        {
            if (typeof (type.toString()) != "string") { return []; }
            return animalsbytype = this._animals.filter(this.isSpecies, type);
        };

        this.getAnimalsBySex = function(animals, sex)
        {
            if (typeof (sex.toString()) != "string") { return []; }
            return animalsbytype = animals.filter(this.isSex, sex);
        }

        this.getRandomAnimalsFromHerd = function (herd, count)
        {
            if (herd.length <= 0 || herd.length < count) { return; }
            var randAnimals = [];
            while (true)
            {
                randAnimal = herd[Math.floor(Math.random() * herd.length)]; // random 0 - herd.length
                if (!randAnimals.contains(randAnimal)) { randAnimals.push(randAnimal); }
                if (randAnimals.length >= count) { break; } // break the loop when we herded enough animals
            }

            return randAnimals;
        }

        this.brandRandomSheep = function ()
        {
            var sheep = this.getAnimalsByType("sheep");
            var unbrandedSheep = sheep.filter(this.isBranded);
            if (unbrandedSheep.length <= 0) { return; }

            var randSheep = this.getRandomAnimalsFromHerd(unbrandedSheep, 1)[0];
            if (randSheep === undefined || randSheep.getBranded()) { return; }

            randSheep.brand();
        };

        this.breedRandomSheep = function ()
        {
            var sheep = this.getAnimalsByType("sheep");
            var maleSheep = this.getRandomAnimalsFromHerd(this.getAnimalsBySex(sheep, "Male"), 1);
            var femaleSheep = this.getRandomAnimalsFromHerd(this.getAnimalsBySex(sheep, "Female"), 1);

            if (maleSheep === undefined || femaleSheep === undefined) { return false; }
            if (maleSheep[0] === undefined || femaleSheep[0] === undefined) { return false; }
            if (maleSheep[0].getBranded() || femaleSheep[0].getBranded()) { return false; }

            // Half of the female name preceeded by half of the male name. 
            var newSheepName = maleSheep[0].getName().substr(0, Math.floor(maleSheep[0].getName().length / 2)) + femaleSheep[0].getName().substr(Math.floor(femaleSheep[0].getName().length / 2), femaleSheep[0].getName().length);

            var newSheep = null;
            if (Math.round(Math.random())) // 50% chance to breed
            {
                switch (Math.round(Math.random())) // 50% chance to be male or female
                {
                    case 0:
                        newSheep = new Sheep(newSheepName, "Male");
                        break;
                    case 1:
                        newSheep = new Sheep(newSheepName, "Female");
                        break;
                }

                newSheep.setParentIds([maleSheep[0].getId(), femaleSheep[0].getId()]);
                this.add(newSheep);
            }
        };

        this.render = function ()
        {
            return template({ 'animals': this._animals });
        };
    };
    return Field;
});
