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
    });    

      
      
    const Context:React.FC<childProps> = (props) => {
    const [books, setBooks] = useState<bookData[]>([]);

    const contextValues = {
        books,
        setBooks,
      };
  return (
    <IntialData.Provider value={contextValues}>
        {props.children}
    </IntialData.Provider>
  )
}

export default Context