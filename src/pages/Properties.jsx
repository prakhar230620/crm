import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property._id} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600">{property.address}</p>
          <p className="text-lg font-bold mt-2">${property.price.toLocaleString()}</p>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;