import { Collapse,  IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Testimonials from "../Testimonials/Testimonials";


export const SideBarCard = () =>{
  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        {/* <div className="flex border flex-col space-y-3 justify-center w-full p-6 shadow-md rounded-xl sm:px-12 ">
          <img
            src="./my-image.png"
            alt=""
            className="w-24 p-1 h-24 border border-gray-200 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-6 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-4">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Mst Surnaly Akter
              </h2>
              <p className="px-5 break-words text-xs sm:text-base dark:text-gray-600">
                surnalyms@gmail.com
              </p>
            </div>
          </div>
        </div> */}
        {/* <h2>Testimonials</h2>
        <Testimonials/> */}

        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
}


const Sidebar = () => {
     const [openNav, setOpenNav] = useState(false);

     useEffect(() => {
       window.addEventListener(
         "resize",
         () => window.innerWidth >= 960 && setOpenNav(false)
       );
     }, []);

  return (
    <div className="">


      <div className="hidden lg:block">
        <SideBarCard />
      </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>


        <Collapse open={openNav}>
            <SideBarCard/>
        </Collapse>

    </div>
  );
}

export default Sidebar
