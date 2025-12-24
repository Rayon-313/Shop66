import React from 'react'
import FrontEndLayout from '../../layout/FrontEndLayout'
import { Link, useParams } from 'react-router-dom'
import { productList } from '../../Data'

function Category() {
  let {catId}=useParams()
  let filter=productList.filter((a)=>a.category==catId)
  return (
    <>
    <FrontEndLayout>
        <section className='container mx-auto'>
            <h2>category {catId}</h2>
             <div className="grid grid-cols-4">
                                 {filter.map((a)=>(
                                     <div className="shadow p-2 border">
                                      <Link to={`/detail/${a.id}`}>
                                         <img src={a.thumbnail} alt="" />
                                         <p>{a.title}</p>
                                         </Link>
                                     </div>
                                 ))}
                             </div>
        </section>
    </FrontEndLayout>
    </>
  )
}

export default Category
