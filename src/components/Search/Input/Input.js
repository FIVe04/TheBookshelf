import React, { useState } from 'react'
import './Input.css'
import SearchIcon from '../../../assets/Search_icon.svg'
import Card from '../../Bestsellers/Cards/Card'


const Input = () => {
    const data = {
        1: {
          title: "Spare",
          author: 'Prince Harry The Duke of Sussex',
          coverUrl: '/images/1_book_logo.svg',
          price:'$8.99',
        },
        2: {
          title: 'Atomic Habits',
          author: 'James Clear',
          coverUrl: '/images/2_book_logo.svg',
          price:'$8.99',
        },
        3: {
          title: 'It Ends with Us',
          author: 'Colleen Hoover',
          coverUrl: '/images/3_book_logo.svg',
          price:'$8.99',
        },
        4: {
          title: 'Lessons in Chemistry',
          author: 'Colleen Hoover',
          coverUrl: '/images/4_book_logo.svg',
          price:'$8.99'
        },
        5: {
          title: 'The Woman in Me',
          author: 'Britney Spears',
          coverUrl: '/images/5_book_logo.svg',
          price:'$8.99'
        },
        
      };
      const result = [];
    Object.keys(data).forEach((key, index) => {
        result.push(data[key]);
    });
    const [value, setValue] = useState('');
    const filtered_books = result.filter(book => {
        return book.title.toLowerCase().includes(value.toLowerCase());
    });
  return (
    <div className='Input'>
        <div className="whole_input">
            <input className='input_field' placeholder='Search' onChange={(event) => setValue(event.target.value)}/>
            <img src={SearchIcon} alt="search_icon" className='icon_search'/>
        </div>
        
        <div className="searched_books">
        {filtered_books.map((book, index) => {
            return (<Card title={book.title} author={book.author} coverUrl={book.coverUrl} price={book.price}/>);
        })}
        </div>
       
        
    </div>
    
    
  )
}

export default Input