import { Helmet } from "react-helmet-async";
import useContextData from "../../hooks/useContextData";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const UpdateProfile = () => {
const { user, updateUserProfile,  setUser} =
  useContextData();
  const [edit,setEdit] = useState(true);
  // const [key,setKey] = useState(0)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });




  const onSubmit = (data) => {
    const { fullName, photoURL } = data;

    updateUserProfile(fullName, photoURL)
      .then(() => {
          setUser({ fullName,  photoURL });
          console.log("User Profile updated successfully");
          // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };




 return (
   <div  className="flex  min-h-[500px] flex-col  items-center justify-center">
     <Helmet>
       <title>HomeScapeHub | Update Profile</title>
     </Helmet>

     <div className="shrink-0 w-full ">
       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
         <h3 className="text-black text-2xl font-medium">Create an account</h3>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Full Name</span>
           </label>
           <input
             type="text"
             placeholder="Full Name"
             className="input input-bordered"
             {...register("fullName")}
           />
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input
             type="email"
             placeholder="email"
             readOnly
             className="input input-bordered"
             {...register("email")}
           />
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Photo URL</span>
           </label>
           <input
             type="url"
             placeholder="photoURL"
             className="input input-bordered"
             {...register("photoURL")}
           />
         </div>

         <div className="form-control mt-1">
           <button
             onClick={() => setEdit(!edit)}
             className=" bg-gradient-to-r shadow-md text-center text-3xl from-pink-300 via-purple-600 to-[#328EFF] bg-300% rounded-xl animate-gradient text-white px-5 py-3"
           >
             Save
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default UpdateProfile