function checkWin(matrix, text, countClick) {

    const win = () => {
        alert("Win " + text);
        window.location.reload();
    }

    const draw = () => {
        alert("Draw");
        window.location.reload();
    }

    let boolWin = false;

    const winCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (matrix[`i${a}`] === text && matrix[`i${b}`] === text && matrix[`i${c}`] === text) {
            win();
            boolWin = true;
            break;
        }
    }
    if (countClick === 9 &&  boolWin === false) {
        draw();
    }
}
export default checkWin;