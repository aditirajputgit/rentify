import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

// Reusable Button Component
const CategoryButton = ({ category, activeCategory, onClick }) => {
  const isActive = activeCategory === category;
  return (
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '9999px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        textTransform: 'capitalize',
        backgroundColor: isActive ? '#2563eb' : '#e5e7eb',
        color: isActive ? 'white' : '#374151',
      }}
      onClick={() => onClick(category)}
    >
      {category === 'activa' ? 'Activa' : category}
    </button>
  );
};

// Reusable BikeCard Component
const BikeCard = ({ bike }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px', color: 'black' }}>
          {bike.name}
        </h3>
        <p style={{ color: '#4b5563' }}>{bike.description}</p>
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        <Button variant='contained' sx={{padding:"2px"}}>View</Button>
        </Box>  
      </div>
    </div>
  );
};

// Main Component
const BikeListPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const bikeCategories = {
    road: [
      { name: 'Racing Bikes', description: 'Lightweight bikes designed for speed and competition' },
      { name: 'Endurance Bikes', description: 'Comfortable bikes for long-distance riding' },
      { name: 'Aero Bikes', description: 'Aerodynamic design for reduced wind resistance' },
      { name: 'Gravel Bikes', description: 'Versatile bikes for mixed terrain riding' },
      { name: 'Cyclocross Bikes', description: 'Specialized bikes for cyclocross racing' },
      { name: 'Touring Bikes', description: 'Sturdy bikes built for long-distance travel with gear' }
    ],
    mountain: [
      { name: 'Cross-Country (XC) Bikes', description: 'Light and efficient for trail riding and racing' },
      { name: 'Trail Bikes', description: 'Versatile bikes for general mountain biking' },
      { name: 'All-Mountain Bikes', description: 'Capable bikes for technical climbs and descents' },
      { name: 'Enduro Bikes', description: 'Built for endurance racing with emphasis on descents' },
      { name: 'Downhill Bikes', description: 'Specialized for downhill racing and park riding' },
      { name: 'Fat Bikes', description: 'Wide-tired bikes for snow, sand, and rough terrain' }
    ],
    electric: [
      { name: 'Electric Road Bikes', description: 'Road bikes with electric assist motors' },
      { name: 'Electric Mountain Bikes', description: 'Off-road bikes with powerful electric motors' },
      { name: 'Electric Hybrid Bikes', description: 'Versatile e-bikes for multiple terrains' },
      { name: 'Electric Folding Bikes', description: 'Compact e-bikes for easy storage and transport' },
      { name: 'Electric City Bikes', description: 'Urban e-bikes designed for commuting' },
      { name: 'Electric Cargo Bikes', description: 'E-bikes built for hauling heavy loads' }
    ],
    activa: [
      { name: 'Activa 6G', description: 'Popular scooter with 110cc engine and advanced features' },
      { name: 'Activa 125', description: 'Premium 125cc scooter with enhanced power and comfort' },
      { name: 'Activa i', description: 'Lightweight and fuel-efficient variant for urban commuting' },
      { name: 'Activa Premium Edition', description: 'Special edition with premium styling and features' },
      { name: 'Activa Electric', description: 'Electric variant of the popular Activa scooter' }
    ]
  };

  const renderBikeCards = () => {
    const categories = activeCategory === 'all' ? Object.entries(bikeCategories) : [[activeCategory, bikeCategories[activeCategory]]];

    return categories.map(([category, bikes]) => (
      <div key={category} style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: 'blue' }}>
          {category === 'activa' ? 'Activa Models' : `${category} Bikes`}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {bikes.map((bike, index) => (
            <BikeCard key={index} bike={bike} />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div style={{ margin: '0', backgroundColor: '#f9fafb', minHeight: '80vh', overflowY: 'scroll' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center', color: 'blue' }}>
        Bike Collection
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
        <CategoryButton category="all" activeCategory={activeCategory} onClick={setActiveCategory} />
        {Object.keys(bikeCategories).map((category) => (
          <CategoryButton key={category} category={category} activeCategory={activeCategory} onClick={setActiveCategory} />
        ))}
      </div>
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
        {renderBikeCards()}
      </div>
    </div>
  );
};

export default BikeListPage;