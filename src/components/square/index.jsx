// @ts-nocheck
import './Square.css';
import BtnSquare from '../ButtonSquare';
import React, { useState } from 'react';

function Square() {

    const [count, setCount] = useState(1);
    return (
        <div>
            <div onClick={(event) => event.target.innerText === '' && setCount(count + 1)} className="playSquare">
                <BtnSquare countClick={count} id="i1" />
                <BtnSquare countClick={count} id="i2" />
                <BtnSquare countClick={count} id="i3" />
                <BtnSquare countClick={count} id="i4" />
                <BtnSquare countClick={count} id="i5" />
                <BtnSquare countClick={count} id="i6" />
                <BtnSquare countClick={count} id="i7" />
                <BtnSquare countClick={count} id="i8" />
                <BtnSquare countClick={count} id="i9" />
            </div>
        </div >
    );

}

export default Square;

