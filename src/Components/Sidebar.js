import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/side.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaSignOutAlt,
  FaBorderNone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ children, props }) => {
  const navigate = useNavigate();
  const Logout = () => {
    toast.success("Logging out..", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.removeItem("email");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
              onClick={() => props.startLoading()}
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </Link>
          ))}

          {/* when sidebar is opening icon and signout are not together */}
          <span className="icon link">
            {<FaSignOutAlt onClick={Logout} style={{ cursor: "pointer" }} />}
            <span
              style={{ display: isOpen ? "block" : "none", height: "80px" }}
            >
              Logout
            </span>
          </span>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
