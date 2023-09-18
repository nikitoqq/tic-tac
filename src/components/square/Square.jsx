import './Square.css';
import BtnSquare from './buttonSquare/BtnSquare';
// реакт необязательно импортить в каждом файле (начиная с 17 версии)
import React, { useState } from 'react';

function Square() {

    // название с маленькой буквы
    const [Count, setCount] = useState(1);

    // с маленькой буквы и стрелочной функцией (а еще лучше через useCallback)
    function ClickEvent(event) {
        if (event.target.innerText === '') {
            setCount(Count + 1);
        }
    }

    return (
        <div>
            {/* с маленькой буквы */}
            <div onClick={ClickEvent} className="PlaySquare">
                {/* ключи важно юзать, т.к. при перерендере может все сломаться без них, глянь в доке */}
                <BtnSquare countProps={Count} id="i1" key="1" />
                <BtnSquare countProps={Count} id="i2" key="2" />
                <BtnSquare countProps={Count} id="i3" key="3" />
                <BtnSquare countProps={Count} id="i4" key="4" />
                <BtnSquare countProps={Count} id="i5" key="5" />
                <BtnSquare countProps={Count} id="i6" key="6" />
                <BtnSquare countProps={Count} id="i7" key="7" />
                <BtnSquare countProps={Count} id="i8" key="8" />
                <BtnSquare countProps={Count} id="i9" key="9" />
            </div>
        </div>
    );

}

export default Square;

