import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("contactList")) || [];
// console.log(initialState);

const contactSlice = createSlice({
   name: "contact",
   initialState,
   reducers: {
      Add_contact: (state, action) => {
         let newCon = [...state, action.payload];
         localStorage.setItem("contactList", JSON.stringify(newCon));
         return newCon;
      },
      Update_Contact: (state, action) => {
         const updatedOne = state.map((eachContact) =>
            eachContact.id === action.payload.id ? action.payload : eachContact
         );
         localStorage.setItem("contactList", JSON.stringify(updatedOne));
         return updatedOne;
      },
      Delete_Contact: (state, action) => {
         const filterData = state.filter(
            (eachContact) => eachContact.id !== action.payload
         );
         localStorage.setItem("contactList", JSON.stringify(filterData));
         return filterData;
      },
   },
});

export const { Add_contact, Update_Contact, Delete_Contact } =
   contactSlice.actions;

export default contactSlice.reducer;
