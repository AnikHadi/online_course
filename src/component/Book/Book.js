import React from 'react';
import './Book.css'

const Book = (props) => {
    // console.log(props.book);
    const { img, price, subject, teacher, course_details } = props.book;

    function toggle(){
        const blur = document.getElementById('blur');
        blur.classList.toggle('active');
        const popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }

    const enrollHandler = props.enrollHandler;


    return (
        <div className='subject' id='blur'>
            <img src={img} class="subject-img" alt="" />
            <div className='sub-description'>
                <h6 class="card-title text-primary">{subject}</h6>
                <h6>Price: {price}</h6>
                <p>Teacher: {teacher}</p>
                <button onClick={() =>toggle()}>Details</button>
                <button onClick={() => enrollHandler(props.book)} className='enroll-btn'>Enroll</button>
            </div>
            <div id='popup' className='popup'>
                <h6 class="card-title text-primary">{subject}</h6>
                <h6>Price: {price}</h6>
                <p>Teacher: {teacher}</p>
                <p>{course_details}</p>
                <button onClick={() => toggle()}>Close</button>
            </div>
        </div>
    );
};

export default Book;