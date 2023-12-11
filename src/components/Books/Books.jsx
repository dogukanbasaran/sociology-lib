import Book from "./Book"

const Books = () => {
  return (
    <section className="py-12">
        <div className="container mx-auto grid grid-cols-4 border bg-sky-800 rounded-md">
            <Book/>
        </div>
    </section>
  )
}

export default Books
