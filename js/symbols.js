
module.exports	= function(){
	var SYM			= 'SYM'
	var PIPE		= 'PIPE'
	var BRACKET		= 'BRAQUET'
	var CURLY		= 'CURLY'
	var PAR			= 'PAR'
	var CARDINAL	= 'CARDINAL'
	var ESCAPE		= 'ESCAPE'
	
	//List of all symbols expected in a regex, and their type
	var SYMBOLS = {
			a	: SYM,
			b	: SYM,
			c	: SYM,
			d	: SYM,
			e	: SYM,
			f	: SYM,
			g	: SYM,
			h	: SYM,
			i	: SYM,
			j	: SYM,
			k	: SYM,
			l	: SYM,
			m	: SYM,
			n	: SYM,
			o	: SYM,
			p	: SYM,
			q	: SYM,
			r	: SYM,
			s	: SYM,
			t	: SYM,
			u	: SYM,
			v	: SYM,
			w	: SYM,
			x	: SYM,
			y	: SYM,
			z	: SYM,
			A	: SYM,
			B	: SYM,
			C	: SYM,
			D	: SYM,
			E	: SYM,
			F	: SYM,
			G	: SYM,
			H	: SYM,
			I	: SYM,
			J	: SYM,
			K	: SYM,
			L	: SYM,
			M	: SYM,
			N	: SYM,
			O	: SYM,
			P	: SYM,
			Q	: SYM,
			R	: SYM,
			S	: SYM,
			T	: SYM,
			U	: SYM,
			V	: SYM,
			W	: SYM,
			X	: SYM,
			Y	: SYM,
			Z	: SYM,
			0	: SYM,
			1	: SYM,
			2	: SYM,
			3	: SYM,
			4	: SYM,
			5	: SYM,
			6	: SYM,
			7	: SYM,
			8	: SYM,
			9	: SYM,
			'|'	: PIPE,
			'['	: BRACKET,
			']'	: BRACKET,
			'('	: PAR,
			')'	: PAR,
			'{'	: CURLY,
			'}'	: CURLY,
			'\\': ESCAPE,
			'?'	: CARDINAL,
			'*'	: CARDINAL,
			'+'	: CARDINAL
	}
	
	var isSymbol			= function(char){
		var symbol	= this.getSymbol(char)
		
		if(symbol === '' || symbol === undefined){
			throw "Undefined symbol "+char
		}
		else if(symbol === SYM){
			return true
		}
		else{
			return false
		}
	}
	
	var isNewGroup			= function(char){
		return char === '('
	}
	
	var isNewOr				= function(char){
		return char === '['
	}
	
	var isDash				= function(char){
		return char === '-'
	}
	
	var isPipe				= function(char){
		return char === '|'
	}
	
	var isNewCardinality	= function(char){
		if(char === '?' || char === '*' || char === '+' || char === '{'){
			return true
		}
		else{
			return false
		}
	}
	
		
	return {
		SYMBOLS				: SYMBOLS,
		SYM					: SYM,
		PIPE				: PIPE,
		BRACKET				: BRACKET,
		CURLY				: CURLY,
		PAR					: PAR,
		CARDINAL			: CARDINAL,
		ESCAPE				: ESCAPE,
		isSymbol			: isSymbol,
		isNewGroup			: isNewGroup,
		isNewOr				: isNewOr,
		isDash				: isDash,
		isPipe				: isPipe,
		isNewCardinality	: isNewCardinality
	}
}()

