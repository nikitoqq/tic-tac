// @ts-ignore
import CheckWin from '../../../logic/winPos';
import React, { useState } from 'react';
import './BtnSquare.css';
// название папки должно быть с большой буквы + совпадать с названием файла
// файл Square.jsx нужно прокинуть в папку Square и назвать index.jsx
// like
// components/Square/index.jsx 
// сейм фор ButtonSquare

const matrix = {
    i1: '', i2: '', i3: '',
    i4: '', i5: '', i6: '',
    i7: '', i8: '', i9: ''
};

function BtnSquare(props) {

    // здесь можно заменить на дестуктуризацию
    // like
    // const {id, countProps} = props;

    const { id } = props;
    // имя лучше поменять на что-то другое (без props)
    const { countProps } = props;

    const [Text, SetText] = useState('');

    // с маленькой буквы и стрелочной функцией (а еще лучше через useCallback)
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

        // с маленькой буквы и стрелочной функцией (а еще лучше через useCallback) и функцию внутри функции низя объявлять
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
