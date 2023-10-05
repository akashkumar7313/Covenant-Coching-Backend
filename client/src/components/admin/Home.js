import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import { FcDebt, FcFinePrint, FcHome } from "react-icons/fc";
import logo from "../assets/llllllll.PNG";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { firebase } from "../db/firebase";

export default function Home() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false); // Fix the typo here
  const [userData, setUserData] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setLogoutLoading(true);
    try {
      await firebase.auth().signOut(); // Use Firebase Auth signOut method

      // Redirect to the login page after successful logout
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLogoutLoading(false);
    }
  }

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex w-[100vw] "
      style={{
        backgroundImage: `url('https://getwallpapers.com/wallpaper/full/0/5/2/129199.jpg')`,
      }}
    >
      <Card className="h-[calc(100vh)] w-[20%] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 px-8">
          <img src={logo} alt="brand" className="h-18 w-[200px]" />
        </div>
        <List>
          <Accordion>
            <ListItem className="p-0 flex items-center hover:bg-red-800 hover:text-white">
              <NavLink
                to="/Home"
                activeClassName="text-blue-500" // Add the desired active class name
                className="border-b-0 p-3 flex items-center"
              >
                <ListItemPrefix>
                  <FcHome className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-normal">
                  Home
                </Typography>
              </NavLink>
            </ListItem>
          </Accordion>
          <Accordion>
            <ListItem className="p-0 flex items-center hover:bg-red-800 hover:text-white">
              <NavLink
                to="/Students/QueryDetail"
                activeClassName="text-blue-500" // Add the desired active class name
                className="border-b-0 p-3 flex items-center"
              >
                <ListItemPrefix>
                  <FcFinePrint className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-normal">
                  Student QueryDetail
                </Typography>
              </NavLink>
            </ListItem>
          </Accordion>
          <Accordion>
          
            <ListItem className="p-0 flex items-center hover:bg-red-800 hover:text-white">
              <NavLink
                to="/Students/Offer"
                activeClassName="text-blue-500" // Add the desired active class name
                className="border-b-0 p-3 flex items-center"
              >
                <ListItemPrefix>
                  <FcDebt className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-normal ">
                  Student Offer
                </Typography>
              </NavLink>
            </ListItem>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem
            className=" flex text-red-700 mt-[400px] hover:text-white border border-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() => handleLogout()}
          >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
