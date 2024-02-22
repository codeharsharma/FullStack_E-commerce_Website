import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Our signature logo hoodie is made from a soft cotton blend and cut for a relaxed fit. It features a drawstring hood, kangaroo pocket and our signature logo on the chest. The perfect layering piece for your off-duty wardrobe.</p>
            <p>
                E-commerce websites typically display products or services in a grid or list format. This is a common design pattern for displaying a large number of products or services. The grid or list format makes it easy for users to scan and compare products.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox