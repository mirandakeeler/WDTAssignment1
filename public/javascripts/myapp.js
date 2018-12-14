var gameBoardModule = (function() {
	var pieces = {
		KING: { name: 'King', white: '&#9812', black: '&#9818;' },
		QUEEN: { name: 'Queen', white: '&#9813', black: '&#9819' },
		ROOK: { name: 'Rook', white: '&#9814', black: '&#9820' },
		BISHOP: { name: 'Bishop', white: '&#9815', black: '&#9821' },
		KNIGHT: { name: 'Knight', white: '&#9816', black: '&#9822' },
		PAWN: { name: 'Pawn', white: '&#9817', black: '&#9823' }
	};

	var players = {
		BLACK: 'black',
		WHITE: 'white'
	};

	var states = {
		READY: 1,
		PIECE_SELECTED: 2
	};

	var takenPieces = {
		white: [ ],
		black: [ ]
	}; 
});
