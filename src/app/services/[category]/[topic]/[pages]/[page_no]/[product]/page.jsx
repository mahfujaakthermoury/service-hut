import React from 'react';

const ServicesPage = async({params}) => {
    const {category, topic, page_no, product} = await params; 
    return (
        <div>
           <h1>{category} category</h1>
           <h2>{topic}</h2><hr />
           <div className="flex justify-between">
            <p>page no: {page_no}</p>
            <p>product: {product}</p>
           </div>
        </div>
    );
};

export default ServicesPage;