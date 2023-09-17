// @ts-ignore
import CheckWin from '../../../logic/winPos';
import React, { useState } from 'react';
import './BtnSquare.css';

const matrix = {
    i1: '', i2: '', i3: '',
    i4: '', i5: '', i6: '',
    i7: '', i8: '', i9: ''
};

function BtnSquare(props) {

    const { id } = props;
    const { countProps } = props;

    const [Text, SetText] = useState('');

    function Click(event) {

        const target = event.target;
        let symble = '';

        if (countProps % 2 !== 0 && target.innerText === '') {
            symble = 'X';
            SetSymble();
        } else if (target.innerText === '') {
            symble = 'O';
            SetSymble();
        }

        function SetSymble() {
            SetText(symble);
            matrix[target.id] = symble;
            CheckWin(matrix, symble, countProps);
        }
    }

    return (
        <div id={id} onClick={Click} className="btn">
            {Text}
        </div>
    );
}

export default BtnSquare;
