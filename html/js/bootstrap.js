requirejs.config({
    paths: {
        tpl: 'lib/tpl/tpl'
    }
});
requirejs(['indexcontroller'], function(indexcontroller) {
    // nothing to do here
});

Array.prototype.contains = function (obj)
{
    var i = this.length;
    while (i--)
    {
        if (this[i] === obj)
        {
            return true;
        }
    }
    return false;
}