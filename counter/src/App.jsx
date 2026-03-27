import React, { useState, useEffect } from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={image} alt={title} style={{ width: '100px' }} />
      <p>{title}</p>
    </div>
  );
};

const PAGE_SIZE=10;

const App = () => {
  // 1. Initialize as an empty array since you plan to use .map()
  const [products, setProducts] = useState([]);
  const [currentpage,setCurrentPage]=useState(0);

  const fetchData = async () => {
    try {
      // 2. Corrected the URL (the /docs path doesn't return JSON data)
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      
      // 3. DummyJSON returns an object with a 'products' array inside it
      setProducts(json.products); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 const totalProducts=products.length;
 const noOfPages=Math.ceil(totalProducts/PAGE_SIZE);
 const start=currentpage*PAGE_SIZE;
 const end=start+PAGE_SIZE;

 const handlePageChange=(n)=>{
   setCurrentPage(n);
 };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* 4. Added a check to ensure products is an array before mapping */}
      {products && products.length > 0 ? (
        products.slice(start,end).map((p) => (
          <ProductCard 
            key={p.id} 
            image={p.thumbnail} // 5. Fixed typo: p.imthumbnail -> p.thumbnail
            title={p.title} 
          />
        ))
      ) : (
        <p>Loading products...</p>
      )}
      <div>
        {
          [...Array(noOfPages).keys()].map((n)=>(
            <span keys={n} onClick={()=>handlePageChange(n)}>{n}</span>
          ))
        }
      </div>
    </div>
  );
};

export default App;