"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context----------------------------------------------------------------
export const questionContext = createContext();

//2) Creating the provider----------------------------------------------------------------
export function QuestionProvider({ children }) {
  const [questionData, setQuestionData] = useState({ text: "", results: "" });

  {
    /*This Use State function fetches all the products and gets them directly from the api; it try
  to fetch the products and then if it fails, it returns an error object
*/
  }


  {
    /*Ths step adds a single product to the cart and the after sets the cart
  to have it's previous data nad the add the new product. This makes it easy on the client side to be able
  to add multiple products to the cart and being able to see the previous products already added there.
*/
  }

  {
    /*This step removes a single product from the cart whose id is equal to the original product id*/
  }

  return (
    <questionContext.Provider value={{ postData, setPostData }}>
      {children}
    </questionContext.Provider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------
export function useCart() {
  // use the useContext hook to access the context data
  const context = useContext(productContext);
  return context;
}
