import React from 'react'

function Breadcrumb({page}) {
  return (
    <div className="breadcrumbs py-6 text-xl font-bold border-t-2 pl-12">
  <ul>
    <li><a>Home</a></li> 
    <li>{page}</li>
  </ul>
</div>
  )
}

export default Breadcrumb