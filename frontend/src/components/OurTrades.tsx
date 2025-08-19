import React from 'react';
import { Zap, Filter, Hammer, Wrench } from 'lucide-react';

const tradesData = [
    {
      id: 1,
      title: 'Electrician',
      icon: Zap,
      image: '/images/img1.jpeg',
      description: 'Comprehensive electrical training covering wiring, circuits, and safety protocols for their chosen trades.'
    },
    {
      id: 2,
      title: 'Fitter',
      icon: Filter,
      image: '/images/img2.jpg',
      description: 'Mechanical fitting skills training with hands-on experience in assembly and maintenance demands, ensuring students are job-ready.'
    },
    {
      id: 3,
      title: 'Draughtsman (Civil)',
      icon: Hammer,
      image: '/images/img3.jpg', 
      description: 'Technical drawing and design skills for civil engineering projects and construction qualifications.'
    },
    {
      id: 4,
      title: 'Welder',
      icon: Wrench,
      image: '/images/img4.webp', 
      description: 'Professional welding techniques and safety procedures for various industrial applications.'
    }
  ];
  


interface TradeCardProps {
  title: string;
  icon: React.ComponentType<any>;
  image: string;
  description: string;
}

function TradeCard({ title, icon: Icon, image, description }: TradeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function OurTrades() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Trades
          </h2>
          
          <p className="text-lg text-green-600 font-medium max-w-4xl mx-auto">
            "SHAPING TOMORROW WITH QUALITY EDUCATION AND SKILL DEVELOPMENT!"
          </p>
        </div>

        {/* Trades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradesData.map((trade) => (
            <TradeCard
              key={trade.id}
              title={trade.title}
              icon={trade.icon}
              image={trade.image}
              description={trade.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}