import { NavLink as Link } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import ReactRoundedImage from "react-rounded-image";
import dashImg from "../assests/dashImg.jpeg"
import "../App.css"
const routes = [

  {

    path: "/Dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/DailyAttendance",
    name: "Daily Attendance",
    icon: <FaUser />,
  },

  {
    path: "/Student",
    name: "Student",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/StudentAttendance",
        name: "Attendance",
        // icon: <FaLock />,
      },
      {
        path: "/StudentProfile",
        name: "Profile ",
        // icon: <FaUser />,
      },
      
    ],
  },
  {
    path: "/Documents",
    name: "Documents",
    icon: <BsCartCheck />,
  },

  {
    path: "/Events",
    name: "Events",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
     
        <motion.div
          animate={{
            width: isOpen ? "230px" : "44px",

            transition: {
             duration: 0.5,
               type: "spring",
               damping: 12,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                   <ReactRoundedImage
                   
          image={dashImg}
          roundedColor="#321124"
          imageWidth="120"
          imageHeight="120"
          roundedSize="6"
          borderRadius="70"
        />
    <p className="logo-text">Prayanka Singh</p>
    <p className="logo-text">Assitant Professor</p>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <Link
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;