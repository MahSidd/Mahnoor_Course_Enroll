// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { doc, getDoc } from "firebase/firestore";
// import { db, auth } from "../pages/firebase";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import IconButton from '@mui/material/IconButton';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

// function TemporaryDrawer() {
//   const [open, setOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);

//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         console.log(user);

//         const docRef = doc(db, "Users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setUserDetails(docSnap.data());
//           console.log(docSnap.data());
//         } else {
//           console.log("User is not logged in");
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {userDetails && (
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <SupervisedUserCircleIcon />
//               </ListItemIcon>
//               <ListItemText primary={userDetails.Username} />
//             </ListItemButton>
//           </ListItem>
//         )}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
      
//       <IconButton onClick={toggleDrawer(true)}>
//         <DensityMediumIcon />
//       </IconButton>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }

// export default TemporaryDrawer;
