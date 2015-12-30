
xdescribe('Test suite for the Symbols module',function(){
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
})

