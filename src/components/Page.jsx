import React from 'react';

export default function Page({ children }) {
  return (
    <div
      className='container-fluid p-0'
      style={{
        background: `url(${
          process.env.PUBLIC_URL + '/cleanwaters_background.png'
        })`,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}

// style={{
//     background: `url(${
//       process.env.PUBLIC_URL + '/cleanwaters_background.png'
//     })`,
//     width: '100%',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
// }}
