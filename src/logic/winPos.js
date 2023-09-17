function CheckWin(matrix, Text, countProps) {
    if (matrix.i1 === Text && matrix.i2 === Text && matrix.i3 === Text) {
        win();
    } else if (matrix.i4 === Text && matrix.i5 === Text && matrix.i6 === Text) {
        win();
    } else if (matrix.i7 === Text && matrix.i8 === Text && matrix.i9 === Text) {
        win();
    } else if (matrix.i1 === Text && matrix.i4 === Text && matrix.i7 === Text) {
        win();
    } else if (matrix.i2 === Text && matrix.i5 === Text && matrix.i8 === Text) {
        win();
    } else if (matrix.i3 === Text && matrix.i6 === Text && matrix.i9 === Text) {
        win();
    } else if (matrix.i1 === Text && matrix.i5 === Text && matrix.i9 === Text) {
        win();
    } else if (matrix.i3 === Text && matrix.i5 === Text && matrix.i7 === Text) {
        win();
    } else if (countProps === 9){
        draw();
    }

    function win() {
        alert("Win " + Text);
        window.location.reload();
    }

    function draw() {
        alert("Draw");
        window.location.reload();
    }
}
export default CheckWin;