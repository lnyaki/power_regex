var _ 		= require('lodash')
var symbols	= require('./symbols')

//Starting our regex_tree module which will instantiate a tree
//that will contain all the subparts of the regex	
	
	var Regex_Tree = function(){
		this._parent 		= null
		this._children		= []
		this._nodetype		= ''
		this._minRepetition	= 1
		this._maxRepetition	= 1
		this._isTerminal	= false
		this._flattenedRegex	= []		//The result of the regex turned into a combination of terminal symbols
										//Ex : (a){1,3} is the regex. The flattenex version would be the array [a,aa,aaa]
	}
	
	Regex_Tree.prototype = (function(){
		
	/**********************************************************
	 *				Getters and setters
	 **********************************************************/
		var setMinRepetitions = function(repetitions){
			this._minRepetition = repetitions
		}
		
		var setMaxRepetitions = function(repetitions){
			this._maxRepetition = repetitions
		}
		
		var setNodeType		= function(type){
			this._nodetype	= type
		}
		
		var getMinRepetitions = function(){
			return this._minRepetition
		}
		
		var getMaxRepetitions = function(){
			return this._maxRepetition
		}
		
		var setParent 	= function(parent){
			this._parent	= parent
		}
		
		var getParent	= function(){
			return this._parent
		}
		
		var addChild	= function(child){
			this._children.push(child)
		}
		
		var getChildren	= function(){
			return this._children
		}
		
		var getNodeType	= function(){
			return this._nodetype
		}
		
		var isNodeTerminal	= function(){
			return this._isTerminal
		}
		
		var setNodeTerminal	= function(terminal){
			this._isTerminal = terminal
		}
		
		var setFlattenedRegex	= function(flatRegex){
			this._flattenedRegex = flatRegex
		}
		
		var test 	= function(mot){
			console.log(mot)
		}
		
	/*****************************************************************
	 *
	 *****************************************************************/
		/* A flattenned regex is the combination of all the terminal symbols
		 * described by that regex.
		 * For instance, for the regex (a){1,3}, the flattenned result would be
		 * the array [a,aa,aaa]
		 * Argument : a regexTree
		 */
		var flatten		= function(node){
			//If already terminal, then it is flattened by definition
			if(node.isNodeTerminal()){
				return node._flattenedRegex
			}
			else{
			//If not terminal, we flatten all the children
				_.forEach(node._children,function(elt){
					elt.flatten()
				})
			}
		}
		
		/* Insert a node B as parent of the current node N.
		 * The previous parent of N, called A, becomes the parent
		 * of node B.
		 * Initial situation : N <-- A
		 * Final situation : N <-- B <-- A  (B has been inserted)
		 */
		var insertNewParent	= function(newParent){
			//save the current parent
			var oldParent = this._parent
			
			newParent.setParent(oldParent)
			this._parent = newParent
		}
		
	/* 
	 * Take a string regex as input and returns a tree representing that
	 * regex.
	 *
	 */
		
		var createRegexTree		= function(regex){
		
			var size 		= regex.length
			var currentChar	= ''
			var currentWord	= ''
			//Read through the whole regex
			for(var i = 0; i<size; i++){
				currentChar	= regex[i]
				
				if(symbols.isSymbol(currentChar)){
					currentWord += currentChar
				}
				else if(symbols.isNewGroup(currentChar)){
					
				}
				else if(symbols.isNewOr(currentChar)){
						
				}
				
				else if(symbols.isDash(currentChar)){
				
				}
				
				else if(symbols.isPipe(currentChar)){
				
				}
				
				else if(symbols.isNewCardinality(currentChar)){
				
				}
			}
		}
		
	
		
		return{
			setMinRepetitions 	: setMinRepetitions,
			setMaxRepetitions	: setMaxRepetitions,
			setNodeType			: setNodeType,
			getMinRepetitions	: getMinRepetitions,
			getMaxRepetitions	: getMaxRepetitions,
			setParent			: setParent,
			getParent			: getParent,
			getNodeType			: getNodeType,
			addChild			: addChild,
			getChildren			: getChildren,
			isTerminal			: isNodeTerminal,
			setNodeTerminal		: setNodeTerminal,
			createRegexTree		: createRegexTree,
			insertNewParent		: insertNewParent,
			test				: test
		}
	})()

	module.exports = {Regex_Tree : Regex_Tree}