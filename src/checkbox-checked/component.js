// checkbox checked
var san = require('san');
var MyComponent = san.defineComponent({
    template: '<div>'
        + '<input san-for="item in list" type="checkbox" value="{{item}}" checked="{=cValue=}">'
        + '</div>'
});

exports = module.exports = MyComponent;
