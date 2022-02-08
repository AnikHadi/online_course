import React from 'react';

const Cart = (props) => {

    console.log(props.cart);
    const totalCoursePrice = props.cart.reduce( (total, course) => {
        return total + course.price;
    } , 0);

    const courseName = props.cart.map(course => {
        let courseN = [];
        const courseNAddComma = course.subject + ' , ';
        courseN.push(courseNAddComma);
        return courseN;
    });


    return (
        <div>
            <h4>Course Enrollment Status</h4>
            <p>Select Course: {props.cart.length}</p>
            <p>Selected Course Name: {courseName}</p>
            <p>Total Price: {totalCoursePrice}</p>  
            <button>View Course</button>
        </div>
    );
};

export default Cart;