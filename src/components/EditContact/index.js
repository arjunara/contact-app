import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Update_Contact } from "../../redux/reducers/contactReducer";
import { useSelector, useDispatch } from "react-redux";
import { isEmail, isMobilePhone } from "validator";
import { toast } from "react-toastify";

const EditContact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");

   const navigate = useNavigate();

   const dispatch = useDispatch();
   const contactList = useSelector((state) => state);

   const { id } = useParams();

   const contactById = contactList.find((eachContact) => eachContact.id === id);

   useEffect(() => {
      if (contactById) {
         setName(contactById.name);
         setEmail(contactById.email);
         setNumber(contactById.number);
      }
   }, [contactById]);

   const handleUpdate = (e) => {
      e.preventDefault();
      console.log(typeof number);
      //validations
      if (!name && !email && !number) {
         return toast.error("Please enter the details", { theme: "colored" });
      }
      // check duplication except id item
      if (contactList.length > 0) {
         let checkName = contactList.find(
            (each) => each.id !== id && each.name === name
         );
         if (checkName) {
            return toast.error("This name is already exist", {
               theme: "colored",
            });
         }
         let checkEmail = contactList.find(
            (each) => each.id !== id && each.email === email
         );
         if (checkEmail)
            return toast.error("This Email is already exist", {
               theme: "colored",
            });
         let checkNumber = contactList.find(
            (each) => each.id !== id && each.number === number
         );
         if (checkNumber)
            return toast.error("This Phone number is already exist", {
               theme: "colored",
            });
      }
      if (!isEmail(email) || !isMobilePhone(number + "", "en-IN"))
         return toast.warn("Enter valid Email ID or Phone number", {
            theme: "colored",
         });

      if (name && email && number) {
         const newContact = {
            id,
            name,
            email,
            number,
         };
         dispatch(Update_Contact(newContact));
         toast.success("Contact is updated successfully", { theme: "colored" });
         navigate("/", { replace: true });
      } else {
         return toast.error("Please enter all the details", {
            theme: "colored",
         });
      }
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-3"></div>
            {contactById ? (
               <div className="col-md-6 text-center mt-5">
                  <h1>Edit Contact</h1>
                  <div className="card shadow mt-5 p-3">
                     <div className="card-body">
                        <form
                           className="mt-3 text-center"
                           onSubmit={handleUpdate}
                        >
                           <div className="form-group mt-2">
                              <input
                                 type="name"
                                 className="form-control"
                                 id="name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 aria-describedby="emailHelp"
                                 placeholder="Enter your name"
                              />
                           </div>
                           <div className="form-group mt-2">
                              <input
                                 type="email"
                                 className="form-control"
                                 id="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder="Enter your mailID"
                              />
                           </div>
                           <div className="form-group mt-2">
                              <input
                                 type="number"
                                 className="form-control"
                                 id="Phonenumber"
                                 value={number}
                                 onChange={(e) => setNumber(e.target.value)}
                                 placeholder="Enter your phone number"
                              />
                           </div>
                           <div className="mt-5">
                              <button type="submit" className="btn btn-dark">
                                 Update Contact
                              </button>
                              <span>&nbsp;&nbsp;&nbsp;</span>
                              <Link to="/" className="btn btn-danger">
                                 Cancel
                              </Link>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            ) : (
               <h3>{`No contact find with id ${id}`}</h3>
            )}
            <div className="col-md-3"></div>
         </div>
      </div>
   );
};

export default EditContact;
