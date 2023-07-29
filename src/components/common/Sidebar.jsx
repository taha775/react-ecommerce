import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {








  
  return (
    <>
    <div class="flex h-screen ">

  <div class="bg-gray-800 text-gray-100 w-64">
    <div class="flex items-center justify-center h-14">
      <span class="text-xl font-bold">ADMIN PANEL</span>
    </div>
    <ul class="mt-6">
      <li>
        <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
          <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm0 4a1 1 0 100 2h7a1 1 0 100-2H3z" clip-rule="evenodd" />
          </svg>
          Dashboard
        </a>
      </li>
      <hr />
      <li>
        <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
          <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 0a1 1 0 110 2 6 6 0 010 12c.263 0 .518-.023.77-.067A7.96 7.96 0 0118 10a8 8 0 01-8 8 7.96 7.96 0 01-5.066-1.863A6.006 6.006 0 014 16a1 1 0 110-2 4 4 0 100-8 1 1 0 01-.77-1.637A7.963 7.963 0 0110 0z" clip-rule="evenodd" />
          </svg>
          Profile
        </a>
      </li>
      <hr />
      <li>
        <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
          <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          Users
        </a>
      </li>
      <hr />
      <li>
        <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
          <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          All Products
        </a>
      </li>
      <hr size="10px" />
      <li>
        <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
          <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm-1 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          Products
        </a>
      </li>
      <hr />
    </ul>
  </div>

  <div class="flex-1 bg-gray-100">
  </div>
</div>

    
    </>
  )
}

export default Sidebar