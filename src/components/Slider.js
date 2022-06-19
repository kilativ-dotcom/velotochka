import React,  { useState, useEffect } from "react";
import { Children } from "react";
import styles from "./Slider.module.scss";

import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg';

function Slider(props) {
    const numberOfSlides = Children.count(props.children);
    const [currentIndex, setIndex] = useState(0);
    const [sliderInterval, setSliderInterval] = useState([]);
    const [intervalSwitch, setIntervalSwitch] = useState(false);
    const [selectedGrid, setSelectedGrid] = useState(2);
    const resetSlider = () => {
        clearInterval(sliderInterval);
        setIntervalSwitch(!intervalSwitch);
    }

    const scrollLeft = () => {
        if(props.autoscroll) resetSlider();
        setIndex((currentIndex) => {
            return (currentIndex + 1 - numberOfSlides) % numberOfSlides;
        })
    }

    const scrollRight = () => {
        if(props.autoscroll) resetSlider();
        setIndex((currentIndex) => {
            return (currentIndex - 1) % numberOfSlides;
        })
    }

    useEffect(() => {
        if(props.autoscroll) {
            const interval = setInterval(() => {
                scrollRight();
            }, 5000);
            setSliderInterval(interval);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intervalSwitch]);


    return (
            <div className={styles.container}>
                <div className={styles.sliderMain}>
                    <ArrowLeft onClick={scrollLeft}/>
                    <div className={styles.body}>
                        <div className={styles.window}>
                            <div 
                                className={styles.slideContainer}
                                style={{
                                    transform: `translateX(${currentIndex * 100}%)`
                                }}
                            >
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <ArrowRight onClick={scrollRight}/>
                </div>
                <div className={styles.buttonContainer}>
                    {
                        Children.map(props.children, (child, index) => {
                            return (
                                <button 
                                    className={-index === currentIndex ? styles.button + " " + styles.buttonActive : styles.button } 
                                    onClick={() => {
                                        setIndex(-index);
                                        if(props.autoscroll)
                                            resetSlider();
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
    );
}

export default Slider;