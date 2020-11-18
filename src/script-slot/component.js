var san = require('san');
var ScriptContent = san.defineComponent({
    template: '<fragment>alert(0);<slot/>;<slot name="foo"/></fragment>'
});

var MyComponent = san.defineComponent({
    components: {
        's-content': ScriptContent
    },
    template: '<script><s-content>alert(1)<fragment slot="foo">alert(2)</fragment></s-content></script>'
});

exports = module.exports = MyComponent;
