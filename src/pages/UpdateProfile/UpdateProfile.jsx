import { Helmet } from "react-helmet-async";
import useContextData from "../../hooks/useContextData";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Spinner/Spinner";



const UpdateProfile = () => {
const { user, updateUserProfile, loading, setUser} =
  useContextData();
  const [edit,setEdit] = useState(true);

  // kkkkkkkkkkkkkk
  console.log(user);


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });

  console.log(typeof user);

  // const onSubmit = (data) => {
  //   const { fullName, email, photoURL } = data;
  //   updateUserProfile(fullName, email, photoURL)
  //     .then(() => {
  //       updateUserEmail(email)
  //         .then(() => {
  //             setUser({ fullName, email, photoURL });
  //             console.log("User Profile updated successfully");
  //           console.log("User Email Updated successfully. ");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onSubmit = (data) => {
    const { fullName, photoURL } = data;
    updateUserProfile(fullName, photoURL)
      .then(() => {
          setUser({ fullName,  photoURL });
          console.log("User Profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // kkkkkkkkkkkkkk


   if (loading) {
     return (
       <div className="mt-16 w-[300px] mx-auto ">
         <Spinner />
       </div>
     );
   }

 return (
   <div className="flex  min-h-[500px] flex-col  items-center justify-center">
     <Helmet>
       <title>HomeScapeHub | Update Profile</title>
     </Helmet>

     {/* {!user && <h1>Please Login</h1>}

     {edit ? (
       <div>
         <ProfileCard />
         {user && (
           <div className="-mt-5 w-[200px] mx-auto">
             <button
               onClick={() => setEdit(!edit)}
               className=" bg-gradient-to-r shadow-md  text-3xl from-pink-300 via-purple-600 to-[#328EFF] bg-300% rounded-xl animate-gradient text-white px-5 py-3"
             >
               Edit Profile
             </button>
           </div>
         )}
       </div>
     ) : (
       <div>

         <div className="shrink-0 w-full ">
           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <h3 className="text-black text-2xl font-medium">
               Create an account
             </h3>

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
                 className=" bg-gradient-to-r shadow-md  text-3xl from-pink-300 via-purple-600 to-[#328EFF] bg-300% rounded-xl animate-gradient text-white px-5 py-3"
               >
                 Save
               </button>
             </div>
           </form>
         </div>

       </div>
     )} */}

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
             className=" bg-gradient-to-r shadow-md  text-3xl from-pink-300 via-purple-600 to-[#328EFF] bg-300% rounded-xl animate-gradient text-white px-5 py-3"
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