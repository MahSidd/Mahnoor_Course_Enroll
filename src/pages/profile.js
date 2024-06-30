import {doc, getDoc} from"firebase/firestore"
import {db, auth} from "./firebase";
import react,{useEffect, useState}  from "react";
import {toast} from "react-toastify";
import NavBar from "../components/navbar"


function Profile(){
    const [Userdetails, serUserdetails] =useState(null);


    async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/login";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
    }
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
          console.log(user);
    
          if(user!==null){
          const docRef = doc(db, "Users", user.uid);
            
          
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            serUserdetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log("User is not logged in");
          }}else{
            window.location.href="/login"
          }
        });
      };
      useEffect(() => {
        fetchUserData();
      }, []);
      
    return(
        
        <div className="profile-container">
            <NavBar/>
        {Userdetails ? (
          <>
            
            <h3>Welcome {Userdetails.Username}</h3>
            <div>
              <p>Email: {Userdetails.email}</p>
              
              {/* <p>Last Name: {Userdetails.lastName}</p> */}
            </div>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
export default Profile