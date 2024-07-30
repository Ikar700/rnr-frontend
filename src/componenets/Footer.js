import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 aligh-items-center">
                <h3>LFG</h3>
              </div>
            </div>
            <div className="col-7">

            </div>
          </div>
        </div>
      </footer>
      <footer></footer>
      <footer className='py-4'>
        <div className="footer-container">
          <div className='row text-white'>
            <div className="text-center">
              &copy; {new Date().getFullYear()} RNRSHOPPING <br/>
              Made with ❤️ by OCF
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;