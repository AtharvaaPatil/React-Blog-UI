import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

// import "./topbar.css"

// export default function Topbar() {
//     const user = false;

//   return (
//     <div className='top'>
//         <div className="topLeft">
//             <i className="topIcon fa-brands fa-facebook-square"></i>
//             <i className="topIcon fa-brands fa-twitter-square"></i>
//             <i className="topIcon fa-brands fa-pinterest-square"></i>
//             <i className="topIcon fa-brands fa-instagram-square"></i>
//         </div>
//         <div className="topCenter">
//             <ul className="topList">
//                 <li className="topListItem">HOME</li>
//                 <li className="topListItem">ABOUT</li>
//                 <li className="topListItem">CONTACT</li>
//                 <li className="topListItem">WRITE</li>
//                 <li className="topListItem">LOGOUT</li>
//             </ul>
//         </div>
//         <div className="topRight">
//             <img className="topImg" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
//             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//         </div>
//     </div>
//   )
// }
