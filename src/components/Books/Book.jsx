import books from "../../data/books"


import React from 'react'

const Book = () => {
  return (
    <>
            {books.map(book => {
                return(
                    <div key={book.id} className="flex flex-col max-w-sm border border-white border-opacity-20 shadow-xl m-4 rounded-md">
                        <div>
                            <img src={book.image} className="object-cover rounded-md rounded-b-none"/>
                        </div>
                        <div className="bg-sky-900  flex flex-col items-start text-sky-100 p-2">
                            <span className="text-[20px] font-bold text-center w-full">{book.title}</span>
                            <p className="p-2">{book.description}</p>
                        </div>
                        <button className="bg-sky-900 hover:bg-sky-950 rounded-t-none rounded-md p-2 text-sky-100 font-bold">More Detail</button>
                    </div>
                )
            })}
    
    </>
  )
}

export default Book
