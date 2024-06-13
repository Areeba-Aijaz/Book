import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

export function MyBook(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const book = useRef();
  // const handleScroll = (event) => {
  //   const scrollDelta = window.scrollY;

    // Combined scroll checks and page turning logic
    // if (scrollDelta > 200 && currentPage < 5) {
    //   book.current.pageFlip().flipNext();
    //   setCurrentPage(currentPage + 1);
    // } else if (scrollDelta > 1000 && currentPage < 7) {
    //   book.current.pageFlip().flipNext();
    //   setCurrentPage(currentPage + 1);
    // } else if (scrollDelta > 1500 && currentPage < 3) {
    //   book.current.pageFlip().flipNext();
    //   setCurrentPage(currentPage + 1);
    // }

    // event.stopPropagation();


    /////////////
    // Combined scroll checks and page turning logic
  //   if (scrollDelta > 200 && currentPage < 4) {
  //     book.current.pageFlip().flipNext();
  //     setCurrentPage(currentPage + 1);
  //   } else if (scrollDelta > 1000 && currentPage < 6) {
  //     book.current.pageFlip().flipNext();
  //     setCurrentPage(currentPage + 1);
  //   } else if (scrollDelta > 1500 && currentPage < 8) {
  //     book.current.pageFlip().flipNext();
  //     setCurrentPage(currentPage + 1);
  //   }

  //   event.stopPropagation();
  

  // if (scrollDelta < 200 && currentPage > 4) {
  //   book.current.pageFlip().flipNext();
  //   setCurrentPage(currentPage - 1);
  // } else if (scrollDelta < 1000 && currentPage > 6) {
  //   book.current.pageFlip().flipNext();
  //   setCurrentPage(currentPage - 1);
  // } else if (scrollDelta < 1500 && currentPage > 8) {
  //   book.current.pageFlip().flipNext();
  //   setCurrentPage(currentPage - 1);
  // }

  // event.stopPropagation();

  const handleScroll = (event) => {
    const scrollDelta = event.deltaY;

    // Scroll down
    if (scrollDelta > 0) {
      if (currentPage < 8) {
        book.current.pageFlip().flipNext();
        setCurrentPage(currentPage + 1);
      }
    }
    // Scroll up
    else {
      if (currentPage > 1) {
        book.current.pageFlip().flipPrev();
        setCurrentPage(currentPage - 1);
      }
    }
  }
return (
    <div
      style={{ border: 'red solid 1px', height: '1000px' }}
      onWheel={handleScroll}
    >
      {/* <button onClick={() => book.current.pageFlip().flipNext(7)}>next</button> */}
      <HTMLFlipBook
        style={{ position: 'fixed' }}
        id="flipbook"
        width={300}
        height={500}
        ref={book}
      >
        <div className="demoPage">
          <p>Page 01</p>
          <h2>Hello! Page 01</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 02</p>
          <h2>Hello! Page 02</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 03</p>
          <h2>Hello! Page03</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 04</p>
          <h2>Hello! Page 04</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 05</p>
          <h2>Hello! Page 05</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 06</p>
          <h2>Hello! Page 06</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 07</p>
          <h2>Hello! Page 07</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
        <div className="demoPage">
          {' '}
          <p>Page 08</p>
          <h2>Hello! Page 08</h2>
          <div>
            <img
              width={200}
              src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            alias accusantium? Commodi fugit numquam id laudantium omnis
            pariatur quasi obcaecati.
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  );
} 