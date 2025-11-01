import React, { useEffect, useState } from 'react'
import "./Footer.scss";
import { Navbar } from 'react-bootstrap';
import { client } from '../../client';

const Footer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="footerInfo"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      {data.map((footer, index) => (
        <Navbar className="app__footer" key={index}>
          <p className="app__footer-top">
          {footer.copyright}
          </p>
          <p className="app__footer-bottom">
            Website by <a href="https://yourpersonalprep.com/about" target="_blank" rel="noreferrer" className='app__footer-name'>John Lagoutaris</a>
          </p>
        </Navbar>
      ))}
    </>
  )
}

export default Footer