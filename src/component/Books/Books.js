import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {
    // Book Api
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./subject_info.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    const [cart, setCart] = useState([]);
    // first add local storage save data
    useEffect(() => {
        const storedCart = getStoredCart();
        let saveCart = [];
        for(const id in storedCart) {
            const addedCourse = books.find(course => course.id === id);
            if(addedCourse){
                saveCart.push(addedCourse);
            }
            setCart(saveCart);
        }
    }, [books])
    //add present activity data
    const enrollHandler = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        addToDb(course.id);
    }

    return (
        <div>
            <div className='search-input'>
                <input className='form-control mx-auto' type="text" placeholder='Search your Subject' />
            </div>
            <div className='subject-area'>
                <div className='subject-show'>
                    {
                        books.map(book => <Book
                            book={book}
                            key={book.id}
                            enrollHandler={enrollHandler}
                        />)
                    }
                </div>
                <div className='subject-enroll'>
                    <Cart cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Books;