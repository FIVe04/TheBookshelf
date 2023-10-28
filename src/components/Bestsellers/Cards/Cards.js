import React from 'react'
import './Cards.css'
import Card from './Card'

const Cards = () => {
  const data = {
    1: {
      title: 'Spare',
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
    // 5: {
    //   title: 'The Woman in Me',
    //   author: 'Britney Spears',
    //   coverUrl: '/images/5_book_logo.svg',
    //   price:'$8.99'
    // },
    
  };
  // Object.keys(data).forEach((key, index) => {console.log(data[key])});
  const result = [];
  Object.keys(data).forEach((key, index) => {
    result.push(data[key]);
  });
  console.log(result);
  // setItems(data)
  // console.log(items)

  return (
    <div className='Cards'>
      {result.map((book, index) => {
        return (
          <Card title={book.title} author={book.author} coverUrl={book.coverUrl} price={book.price}/>
        )
        })}
    </div>
    // items.map((book) => <h1>book.title</h1>)
  )
}

export default Cards