import React, {useRef, useState} from 'react';

const Card = () => {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const cardRef = useRef();

    const handleMouseMove = (event) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        setCursor({ x: x, y: y });
    };

    return (
        <div className="card" onMouseMove={handleMouseMove} ref={cardRef}>
            <h3>Card</h3>
            <div className="gradient" style={{ left: cursor.x, top: cursor.y }}></div>
        </div>
    );
};

export default Card;