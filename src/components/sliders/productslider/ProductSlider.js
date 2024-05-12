import React, { useState, useEffect, useRef } from 'react';
import './ProductSlider.css';
import { Link } from 'react-router-dom';

function SliderComponent({ data }) {
    const [isLeftVisible, setIsLeftVisible] = useState(true);
    const [isRightVisible, setIsRightVisible] = useState(true);
    const sliderRef = useRef(null); // Create a ref to access the slider element
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Handle click events for the left and right navigation icons
    const handleLeftClick = () => {
        sliderRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    };

    const handleRightClick = () => {
        sliderRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    };

    // Handle scroll events to detect extreme positions
    const handleScroll = () => {
        const slider = sliderRef.current;
        setIsRightVisible(slider.scrollLeft + slider.clientWidth < slider.scrollWidth);
        setIsLeftVisible(slider.scrollLeft > 0); // Show left button only if scrolled to the right
    };

    // Handle mouse down event to start dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    // Handle mouse up event to stop dragging
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse move event to update scroll position while dragging
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed as needed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        // Check initial scroll position
        const slider = sliderRef.current;
        setIsRightVisible(slider.scrollLeft + slider.clientWidth < slider.scrollWidth);
        setIsLeftVisible(slider.scrollLeft > 0); // Set initial visibility of left button

        // Event listeners for mouse dragging
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up event listeners
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mouseleave', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging]); // Add isDragging to the dependencies to update the effect when it changes

    return (
        <div className="main-slider-container">
            {/* Left navigation icon */}
            {isLeftVisible && (
                <svg onClick={handleLeftClick} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="slider-icon left" style={{ zIndex: 99 }} height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#313133" d="M0 0h24v24H0z"></path>
                    <path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                </svg>
            )}
            {/* Slider container */}
            <div ref={sliderRef} onScroll={handleScroll} className="grid-slider col-12">
                {data.slice(0, 15).map((data, index) => (
                    <Link to={`/product/${data.id}`} className='productLink' key={index}>
                        <div className="slider-card" key={index}>
                            <div className="slider-card-image" style={{ backgroundImage: `url(${data.image})` }}></div>
                            <div className='slider-card-info'>
                                <p className="slider-card-title">{data.title}</p>
                                <p className="slider-card-price">Ksh <strong>{parseFloat(data.price).toLocaleString()}</strong></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Right navigation icon */}
            {isRightVisible && (
                <svg onClick={handleRightClick} stroke="currentColor" fill="yellow" strokeWidth="0" viewBox="0 0 24 24" className="slider-icon right" style={{ zIndex: 20 }} height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#313133" d="M0 0h24v24H0z"></path>
                    <path fill="white" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
            )}
        </div>
    );
}

export default SliderComponent;
