// Test with the jasmin unit test framework.
// I'm not including jasmine in the github repo.

describe("Initialisation of properties of Regex_Tree ", function(){
	var Regtree = require('../regex_tree')
	var tree
	
	beforeEach(function(){
		tree = new Regtree.Regex_Tree();
	})
		
	it("should have a Minimum Interval set to 1", function(){
		var num = 1
		expect(tree.getMinRepetitions()).toEqual(num)

		tree.setMinRepetitions(num);
		
		var min = tree.getMinRepetitions()
		
		expect(min).toEqual(num)
	})
	
	it("should have a Maximum Interval set to 1", function(){
		var num = 1
		expect(tree.getMaxRepetitions()).toEqual(num)

		tree.setMaxRepetitions(num);
		
		var max = tree.getMaxRepetitions()
		
		expect(max).toEqual(num)
	})
	
	it("Should have an empty Node Type property", function(){
	
	})
	
	it("Should have Parent Node property", function(){})

	it("Should have an empty Node Child array", function(){})
	
	it("Should have a 'Terminal' property set to false", function(){})

})
