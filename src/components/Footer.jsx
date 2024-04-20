import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (


      <footer className="text-center p-4">
          <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <div className="w-full mx-auto">
              <div className="sm:flex items-center text-center">
                  
              </div>
              <span className="block text-xs md:text-sm text-gray-500 text-center dark:text-gray-400 mt-5">
                  © 2024{" "}
                  <Link href="/" className="hover:underline">
                      {" "}
                      defi 
                  </Link>
                  . All Rights Reserved.
              </span>
          </div>
      </footer>


  )
}

export default Footer

