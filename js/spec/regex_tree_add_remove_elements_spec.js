describe('Test the addition and removal of nodes to the Regex tree',function(){
	var Regtree = require('../regex_tree')
	var tree
	
	beforeEach(function(){
		tree = new Regtree.Regex_Tree();
	})
	
	it('Should add a new child node to the tree',function(){
		var child = new Regtree.Regex_Tree()
		expect(tree.getChildren()).toEqual([])
		
		tree.addChild(child)
		
		var children = tree.getChildren()
		
		expect(children.length).toEqual(1)
		expect(children[0]).toEqual(child)
	})
	
	it('Should add a parent node to the tree',function(){
		var parent = new Regtree.Regex_Tree();
		
		tree.setParent(parent)
		
		expect(parent).not.toBe(null)
		expect(parent).toEqual(tree.getParent())
	})
	
	it('Should insert a node between the parent node and the tree',function(){
		var newParent 	= new Regtree.Regex_Tree();
		var parent		= tree.getParent()
		
		tree.insertNewParent(newParent)
		
		//Test that the new parent is correctly set
		expect(tree.getParent()).toEqual(newParent)
		//Test that the old parent has become the grand parent
		expect(tree.getParent().getParent()).toEqual(parent)
	})
	
	it('Should create a single empty node',function(){
		
	})
	
	it('Should create a valid tree based on the regular expression provided',function(){
	
	})
})