define(['Field', 'Sheep'], function(Field, Sheep) {
    var addFemaleSheepNode = document.getElementById('addFemaleSheep');
    var addMaleSheepNode = document.getElementById('addMaleSheep');

    var brandRandomSheepNode = document.getElementById('brand');
    var breedRandomSheepNode = document.getElementById('breed');

    var fieldNode = document.getElementById('fieldContainer');
    var nameInputNode = document.getElementById('animalName');


    // create a field, passing the node to render html to
    var field = new Field();
    console.log(field);

    // render the field html
    fieldNode.innerHTML = field.render();

    addFemaleSheepNode.addEventListener('click', function (e)
    {
        if (nameInputNode.value.length <= 0) { return; }
        var sheep = new Sheep(nameInputNode.value, 'Female');
        field.add(sheep);
        fieldNode.innerHTML = field.render();
    });

    addMaleSheepNode.addEventListener('click', function (e)
    {
        if (nameInputNode.value.length <= 0) { return; }
        var sheep = new Sheep(nameInputNode.value, 'Male');
        field.add(sheep);
        fieldNode.innerHTML = field.render();
    });

    brandRandomSheepNode.addEventListener('click', function (e)
    {
        field.brandRandomSheep();
        fieldNode.innerHTML = field.render();
    });

    breedRandomSheepNode.addEventListener('click', function (e)
    {
        field.breedRandomSheep();
        fieldNode.innerHTML = field.render();
    });
});
