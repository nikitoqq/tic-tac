// @ts-ignore
import checkWin from '../../Utils/winPos';
import React, { useState, useCallback } from 'react';
import './ButtonSquare.css';

const matrix = {
    i1: '', i2: '', i3: '',
    i4: '', i5: '', i6: '',
    i7: '', i8: '', i9: ''
};

function BtnSquare({ countClick, id }) {

    const [text, SetText] = useState('');
    let symble = '';

    const click = useCallback((event) => {
        if (countClick % 2 !== 0 && event.target.innerText === '') {
            symble = 'X';
            setSymble(event);

        } else if (event.target.innerText === '') {
            symble = 'O';
            setSymble(event);
        }
    }
        , [countClick, symble]);

    const setSymble = useCallback((event) => {
        SetText(symble);
        matrix[event.target.id] = symble;
        checkWin(matrix, symble, countClick);
    }, [countClick, symble]);

    return (
        <div id={id} onClick={click} className="btn">
            {text}
        </div>
    );
}

export default BtnSquare;
