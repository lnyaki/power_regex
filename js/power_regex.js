
var Regtree = require('./regex_tree')

var tree = new Regtree.Regex_Tree()

tree.test('Damn!')

var min = 1;
var max = 5;

tree.setMinRepetitions(min)
tree.setMaxRepetitions(max)
console.log('Min : '+tree.getMinRepetitions()+'  Max : '+tree.getMaxRepetitions())

