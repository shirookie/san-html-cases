const { Component } = require('san')

class Node extends Component {}
Node.components = { 'ui-node': 'self' }
Node.template = '<div id="{{ root.name }}"><ui-node s-if="root.children" s-for="node in root.children" root="{{ node }}"/></div>'

exports = module.exports = Node
