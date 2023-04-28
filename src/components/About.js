import React, {useState} from 'react';
import Card from "./Card";
import {InView} from "react-intersection-observer";
import {Bounce} from "react-reveal";

function About(props) {
    const [show, setShow] = useState(false);

    return (
        <InView onChange={(inView) => setShow(inView)}>
            <div className="section" style={{backgroundColor: 'orange'}} id="section2">
                {
                    show && (
                        <Bounce bottom delay={1000}>
                            <Card/>
                        </Bounce>
                    )
                }
            </div>
        </InView>
    )
}

export default About;