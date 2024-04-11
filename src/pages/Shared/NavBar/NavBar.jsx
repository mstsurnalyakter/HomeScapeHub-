import React, { useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,

} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";


function NavList() {
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/update-profile"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Update Profile
      </NavLink>

      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        About Us
      </NavLink>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0 z-50">
      <Navbar className="mx-auto max-w-7xl shadow-none px-3 lg:px-2 pt-4 mb-6 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center"
          >
            <img className="w-20" src="./logo2.png" alt="" />
            <h3>HomeScapeHub</h3>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-4 lg:flex items-center">
            <div className="dropdown w-10 dropdown-end dropdown-hover flex items-center justify-center rounded-full">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border p-1">
                  <img
                    alt="profile image"
                    className="w-full"
                    src="./my-image.png"
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-44 z-[1] px-5 py-10  border-s-lime-300 shadow menu space-y-3 menu-sm dropdown-content bg-base-100 rounded-box w-64"
              >
                <p>
                  <span className="font-bold">Name:</span> Mst Surnaly Akter
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Name:</span> surnalyms@gmail.com
                </p>
              </div>
            </div>

            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0073e1] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                  : "text-[#131313CC] border border-[#0073e1] px-3 py-1 rounded-lg"
              }
            >
              Login
            </NavLink>
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
        </div>

        <Collapse open={openNav}>
          <NavList />

          <div className="dropdown flex w-10 text-black mb-5 dropdown-hover mx-auto items-center dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border p-1">
                <img alt="profile image" src="./my-image.png" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] px-5 py-10 border border-s-lime-300 shadow menu space-y-3 menu-sm dropdown-content bg-base-100 rounded-box w-64"
            >
              <p>
                <span className="font-bold">Name:</span> Mst Surnaly Akter
              </p>
              <p>
                {" "}
                <span className="font-bold">Name:</span> surnalyms@gmail.com
              </p>
            </div>
          </div>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#0073e1] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                : "text-[#131313CC] border flex items-center justify-center border-[#0073e1] px-3 py-1 rounded-lg"
            }
          >
            Login
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;







// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Card,
//   IconButton,
// } from "@material-tailwind/react";
// import {
//   CubeTransparentIcon,
//   UserCircleIcon,
//   CodeBracketSquareIcon,
//   Square3Stack3DIcon,
//   ChevronDownIcon,
//   Cog6ToothIcon,
//   InboxArrowDownIcon,
//   LifebuoyIcon,
//   PowerIcon,
//   RocketLaunchIcon,
//   Bars2Icon,
// } from "@heroicons/react/24/solid";

// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Inbox",
//     icon: InboxArrowDownIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];

// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1">
//         {profileMenuItems.map(({ label, icon }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2 rounded ${
//                 isLastItem
//                   ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                   : ""
//               }`}
//             >
//               {React.createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}
//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }

// nav list menu
// const navListMenuItems = [
//   {
//     title: "@material-tailwind/html",
//     description:
//       "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
//   },
//   {
//     title: "@material-tailwind/react",
//     description:
//       "Learn how to use @material-tailwind/react, packed with rich components for React.",
//   },
//   {
//     title: "Material Tailwind PRO",
//     description:
//       "A complete set of UI Elements for building faster websites in less time.",
//   },
// ];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const renderItems = navListMenuItems.map(({ title, description }) => (
//     <a href="#" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));

//   return (
//     <React.Fragment>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//               Pages{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//         Pages{" "}
//       </MenuItem>
//       <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
//         {renderItems}
//       </ul>
//     </React.Fragment>
//   );
// }

// nav list component
// const navListItems = [
//   {
//     label: "Account",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Blocks",
//     icon: CubeTransparentIcon,
//   },
//   {
//     label: "Docs",
//     icon: CodeBracketSquareIcon,
//   },
// ];

// function NavList() {
//   return (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
//       <NavListMenu />
//       {navListItems.map(({ label, icon }, key) => (
//         <Typography
//           key={label}
//           as="a"
//           href="#"
//           variant="small"
//           color="gray"
//           className="font-medium text-blue-gray-500"
//         >
//           <MenuItem className="flex items-center gap-2 lg:rounded-full">
//             {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
//             <span className="text-gray-900"> {label}</span>
//           </MenuItem>
//         </Typography>
//       ))}
//     </ul>
//   );
// }

// const NavBar = ()=> {
//   const [isNavOpen, setIsNavOpen] = React.useState(false);

//   const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setIsNavOpen(false)
//     );
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
//       <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           size="sm"
//           color="blue-gray"
//           variant="text"
//           onClick={toggleIsNavOpen}
//           className="ml-auto mr-2 lg:hidden"
//         >
//           <Bars2Icon className="h-6 w-6" />
//         </IconButton>

//         <Button size="sm" variant="text">
//           <span>Log In</span>
//         </Button>
//         <ProfileMenu />
//       </div>
//       <MobileNav open={isNavOpen} className="overflow-scroll">
//         <NavList />
//       </MobileNav>
//     </Navbar>
//   );
// }

// export default NavBar;
