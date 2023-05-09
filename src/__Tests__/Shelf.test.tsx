import { MemoryRouter } from "react-router-dom";
import Shelf from "../Components/BookData/Shelf/Shelf";
import { render, screen } from "@testing-library/react";
// import  { bookData } from "../Context";


describe('fetch fuction and display on shelf', ()=>{

    // test('render getAll Books', async () => {
    // const mockResponce: book={
    //     status:200,
    //     headers:'connect',
    //     ok: true,
    //     redirected: true,
    //     statusText: '',
    //     json: () => Promise.resolve({id:1,title:'Book 1'})
    //   }
    //   jest.spyOn(global,'fetch').mockResolvedValue({
    //     json: jest.fn().mockResolvedValue(mockResponce),
    //   });
    //   render(<Shelf />);
    //   const bookItems = await screen.findAllByRole('listitem');
    //     expect(bookItems).toHaveLength(3);
  
    //     expect(bookItems[0]).toHaveTextContent('Book 1');
    //       global.fetch.mockRestore();
    // });

    // test('SendBookToShelf',() => {
    //     const shelfBooks: bookData[] = [{id:1, title:'book1', authors:'Heery', shelf:'Read'},
    //     {id:2, title:'book2', authors:'Jeff', shelf:'Want To Read'}]
    //     render(
    //     <MemoryRouter>
    //         <Shelf books={shelfBooks}/>
    //     </MemoryRouter>);
    //     expect(screen.getByText('book1')).toBeInTheDocument();
    //     expect(screen.getByText('book2')).toBeInTheDocument();
        
    // })
  });
