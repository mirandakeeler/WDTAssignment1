var gameStatModule = {function () {

    // declare pieces variables
        var knight = {piece: "knight", white: "&#9815;", black: "&#9822;"}; 
        var king = {piece: "king", white: "&#9812;", black: "&#9818;"}; 
        var queen = {piece: "queen", white: "&#9813;", black: "&#9819;"};  
        var pawn = {piece: "pawn", white: "&#9817;", black: "&#9823;"};  
        var rook = {piece: "rook", white: "&#9814;", black: "&#9820;"}; 
        var bishop = {piece: "bishop", white: "&#9815;", black: "&#9821;"}; 
}}; 

// create the chessboard with 2 loops


var chessBoard = function(){
var size = 8;

for (var lineCounter = 1; lineCounter < size; lineCounter++) { 

    if (lineCounter % 2 === 0) { //if lineCounter is an even number
        for (var charCounter = 1; charCounter < size; charCounter++) {
            var evenOdd = (charCounter%2 === 0);
            switch (evenOdd) {
                case true:
                    chessBoard += "#";
                    break;
                case false:
                    chessBoard += " ";
                    break;
                }
            }                   
        }
    else { //if lineCounter is an odd number
        for (var charCounter = 1; charCounter < size; charCounter++) {
            var evenOdd = (charCounter % 2 === 0);
            switch (evenOdd) {
                case true:
                    chessBoard += " ";
                    break;
                case false:
                    chessBoard += "#";
                    break;
            }
        }                       
    }   
    chessBoard += "\n";
}
console.log(chessBoard);
};