//Starting our regex_tree module which will instantiate a tree
//that will contain all the subparts of the regex	
	
	var Regex_Tree = function(){
		this._parent 		= null
		this._children		= []
		this._nodetype		= ''
		this._minRepetition	= 0
		this._maxRepetition	= 1
	}
	
	Regex_Tree.prototype = (function(){
		
	
		var setMinRepetitions = function(repetitions){
			_minRepetition = repetitions
		}
		
		var setMaxRepetitions = function(repetitions){
			_maxRepetition = repetitions
		}
		
		var setNodeType		= function(type){
			_nodetype	= type
		}
		
		var getMinRepetitions = function(){
			return _minRepetition
		}
		
		var getMaxRepetitions = function(){
			return _maxRepetition
		}
		
		var setParent 	= function(parent){
			_parent	= parent
		}
		
		var getParent	= function(){
			return _parent
		}
		
		var addChild	= function(child){
			_children.push(child)
		}
		
		var getChildren	= function(){
			return _children
		}
		
		var test 	= function(mot){
			console.log(mot)
		}
		
		
		return{
			setMinRepetitions 	: setMinRepetitions,
			setMaxRepetitions	: setMaxRepetitions,
			setNodeType			: setNodeType,
			getMinRepetitions	: getMinRepetitions,
			getMaxRepetitions	: getMaxRepetitions,
			setParent			: setParent,
			getParent			: getParent,
			addChild			: addChild,
			getChildren			: getChildren,
			test				: test
		}
	})()

	module.exports = {Regex_Tree : Regex_Tree}