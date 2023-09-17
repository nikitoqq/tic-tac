import './Square.css';
import BtnSquare from './buttonSquare/BtnSquare';
import React, { useState } from 'react';

function Square() {

    const [Count, setCount] = useState(1);

    function ClickEvent(event) {
        if (event.target.innerText === '') {
            setCount(Count + 1);
        }
    }

    return (
        <div>
            <div onClick={ClickEvent} className="PlaySquare">
                <BtnSquare countProps={Count} id="i1" />
                <BtnSquare countProps={Count} id="i2" />
                <BtnSquare countProps={Count} id="i3" />
                <BtnSquare countProps={Count} id="i4" />
                <BtnSquare countProps={Count} id="i5" />
                <BtnSquare countProps={Count} id="i6" />
                <BtnSquare countProps={Count} id="i7" />
                <BtnSquare countProps={Count} id="i8" />
                <BtnSquare countProps={Count} id="i9" />
            </div>
        </div>
    );

}

export default Square;

