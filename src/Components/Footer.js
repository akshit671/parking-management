// import React from 'react';
// import '../Styles/Footer.css'

// const Footer = () => {
//   return (
//     <div>
//       {/* FOOTER START */}
//       <div className="footer">
//         <div className="contain">
//           <div className="col">
//             <h1>Company</h1>
//             <ul>
//               {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="col">
//             <h1>Products</h1>
//             <ul>
//               {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="col">
//             <h1>Accounts</h1>
//             <ul>
//               {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="col">
//             <h1>Resources</h1>
//             <ul>
//               {['Webmail', 'Redeem code', 'WHOIS lookup', 'Site map', 'Web templates', 'Email templates'].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="col">
//             <h1>Support</h1>
//             <ul>
//               {['Contact us', 'Web chat', 'Open ticket'].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="col social">
//             <h1>Social</h1>
//             <ul>
//               <li key="facebook">
//                 <img src="https://svgshare.com/i/5fq.svg" alt="Facebook" width="32" />
//               </li>
//               <li key="twitter">
//                 <img src="https://svgshare.com/i/5eA.svg" alt="Twitter" width="32" />
//               </li>
//               <li key="instagram">
//                 <img src="https://svgshare.com/i/5f_.svg" alt="Instagram" width="32" />
//               </li>
//             </ul>
//           </div>
//           <div className="clearfix"></div>
//         </div>
//       </div>
//       {/* END OF FOOTER */}
//     </div>
//   );
// };

// export default Footer;



import React from 'react';
import "../Styles/Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>MyWebsite</h3>
        <p>Your go-to platform for awesome content!</p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
