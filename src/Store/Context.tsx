import React, {  useState } from 'react';
import  { section, bookData } from '../Components/UI/Home/Home'

interface sendBookContext {
    sections?: section[];
    books:bookData[]
    setBooks:(books:bookData[]) => void;
    book?:bookData;
 }

  interface childProps{
    children?:React.ReactNode
  }

export const IntialData = React.createContext<sendBookContext>({
    books: [],
    setBooks:([]) =>{},
    //   bookShelfHandler: (book: bookData, whichShelf: string) => {},
    });
    
    // export const BookContext = () => useContext(IntialData);




      
      
    const Context:React.FC<childProps> = (props) => {
    const [books, setBooks] = useState<bookData[]>([]);

    const contextValues = {
        books,
        setBooks,
        // sections: [
        //   { sectionName: "currentlyReading", books: currentlyReading },
        //   { sectionName: "wantToRead", books: wantToRead },
        //   { sectionName: "read", books: read },
        // ],
        // bookShelfHandler: bookShelfHandler,
      };
  return (
    <IntialData.Provider value={contextValues}>
        {props.children}
    </IntialData.Provider>
  )
}

export default Context