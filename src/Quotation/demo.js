<div className="mt-4">
{selectedCategory === 'All Items' && (
  <div>
    {/* Display furniture names */}
    <h2>Furniture Names</h2>
    {/* Add code to display furniture names here */}
  </div>
)}
{selectedCategory === 'Onsite & Civil works' && (
  <div>
    {/* Display quotation and details for Onsite & Civil works */}
   <Onsite/>
    {/* Add code to display quotation and details here */}
  </div>
)}
{selectedCategory === 'Furniture, Decor & Wardrobe' && (
  <div>
    {/* Display pictures and details for Furniture, Decor & Wardrobe */}
    <h2>Furniture, Decor & Wardrobe Pictures and Details</h2>
    {/* Add code to display pictures and details here */}
  </div>
)}
{selectedCategory === 'Kitchen & Accessories' && (
  <div>
    {/* Display kitchen accessories */}
    <h2>Kitchen Accessories</h2>
    {/* Add code to display kitchen accessories here */}
  </div>
)}
</div>