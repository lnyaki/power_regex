
describe('Test suite for the Symbols module',function(){
	var symbols	= require('../symbols')

	it('Should recognize common symbols',function(){
		expect(symbols.isSymbol('k')).toBe(true)
		expect(symbols.isSymbol('5')).toBe(true)
		expect(symbols.isSymbol('Z')).toBe(true)

	})
	
	it('Should not recognize characters which are not common symbols',function(){
		expect(symbols.isSymbol('[')).toBe(false)
		expect(symbols.isSymbol('*')).toBe(false)
	})
	
	it('Should send an exception for non-supported characters',function(){
		
	})
	
	it('Should return true if the character for new group is given as argument',function(){
		expect(symbols.isNewGroup('(')).toBe(true)
		expect(symbols.isNewGroup('e')).toBe(false)
	})
	
	it('Should return true if the character for new OR is found',function(){
		expect(symbols.isNewOr('[')).toBe(true)
		expect(symbols.isNewOr('o')).toBe(false)
	})
	
	it('Should return true if the symbol is a dash(-)',function(){
		expect(symbols.isDash('-')).toBe(true)
		expect(symbols.isDash('o')).toBe(false)
	})
	
	it('Should return true if the symbol is a pipe (|)',function(){
		expect(symbols.isPipe('|')).toBe(true)
		expect(symbols.isPipe('o')).toBe(false)
		expect(symbols.isPipe('ppp')).toBe(false)
	})
	
	it('Should return true if the symbol is a cardinality symbol',function(){
		expect(symbols.isNewCardinality('*')).toBe(true)
		expect(symbols.isNewCardinality('+')).toBe(true)
		expect(symbols.isNewCardinality('?')).toBe(true)
		expect(symbols.isNewCardinality('{')).toBe(true)
		expect(symbols.isNewCardinality('µ')).toBe(false)
	})
	
	it('Should return the type of the symbol',function(){
		expect(symbols.getSymbolType('k')).toEqual(symbols.SYM)
		expect(symbols.getSymbolType('[')).toEqual(symbols.BRACKET)
		expect(symbols.getSymbolType('(')).toEqual(symbols.PAR)
		expect(symbols.getSymbolType('{')).toEqual(symbols.CURLY)
		expect(symbols.getSymbolType('*')).toEqual(symbols.CARDINAL)
	})
})






