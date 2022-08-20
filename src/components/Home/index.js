import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Delete_Contact } from "../../redux/reducers/contactReducer";

const Home = () => {
   const contactData = useSelector((state) => state);
   // console.log(contactData);
   const dispatch = useDispatch();

   const deleteContact = (id) => {
      dispatch(Delete_Contact(id));
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <h1 className="mt-5">
                  Welcome to React Contact app using Redux
               </h1>
               <Link to="/add">
                  <button type="button" className="btn btn-primary mt-5">
                     Add Contact
                  </button>
               </Link>
            </div>
         </div>
         <div className="row d-flex flex-clumn justify-content-center">
            <div className="col-md-8  mt-5 ">
               {contactData.length > 0 && (
                  <table className="table table-dark">
                     <thead>
                        <tr className="table-success">
                           <th scope="col">S.No</th>
                           <th scope="col">Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">Phone Number</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {contactData.map((each, i) => {
                           return (
                              <tr className="table-light" key={i}>
                                 <th scope="row">{i + 1}</th>
                                 <td>{each.name}</td>
                                 <td>{each.email}</td>
                                 <td>{each.number}</td>
                                 <td>
                                    <div className="d-flex justify-content-around">
                                       <Link to={`/edit/${each.id}`}>
                                          <button
                                             type="button"
                                             className="btn btn-sm btn-info text-light"
                                          >
                                             Edit
                                          </button>
                                       </Link>
                                       <button
                                          type="button"
                                          className="btn btn-sm btn-danger"
                                          onClick={() => deleteContact(each.id)}
                                       >
                                          Delete
                                       </button>
                                    </div>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               )}
            </div>
         </div>
      </div>
   );
};

export default Home;
