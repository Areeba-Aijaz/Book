import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//  <HTMLFlipBook
//    style={{ position: 'fixed' }}
//    id="flipbook"
//    width={300}
//    height={500}
//    ref={book}
//  >
//    <div className="demoPage">
//      <p>Page 01</p>
//      <h2>Hello! Page 01</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 02</p>
//      <h2>Hello! Page 02</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 03</p>
//      <h2>Hello! Page03</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 04</p>
//      <h2>Hello! Page 04</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 05</p>
//      <h2>Hello! Page 05</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 06</p>
//      <h2>Hello! Page 06</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 07</p>
//      <h2>Hello! Page 07</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//    <div className="demoPage">
//      {' '}
//      <p>Page 08</p>
//      <h2>Hello! Page 08</h2>
//      <div>
//        <img
//          width={200}
//          src="https:plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
//          alt=""
//        />
//      </div>
//      <p>
//        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, alias
//        accusantium? Commodi fugit numquam id laudantium omnis pariatur quasi
//        obcaecati.
//      </p>
//    </div>
//  </HTMLFlipBook>; 