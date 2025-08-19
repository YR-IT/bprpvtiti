import React from 'react';
import { Zap, Hammer, Wrench, ShieldCheck, Droplet, Monitor } from 'lucide-react';

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
      icon: Wrench,
      image: '/images/img2.jpg',
      description: 'Mechanical fitting skills training with hands-on experience in assembly and maintenance demands, ensuring students are job-ready.'
    },
    {
      id: 3,
      title: 'Steno-English',
      icon: Hammer,
      image: '/images/img3.jpg', 
      description: 'Technical drawing and design skills for civil engineering projects and construction qualifications.'
    },
    {
      id: 4,
      title: 'COPA',
      icon: Monitor,
      image: 'https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcm5pbmclMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D', 
      description: 'Training in computer operations, programming fundamentals, office applications, and IT skills for industry and business environments.'
    },
    {
      id: 5,
      title: 'Plumber',
      icon: Droplet,
      image: 'https://media.istockphoto.com/id/184313492/photo/training-to-be-a-plumber-trainee-making-notes.jpg?s=612x612&w=0&k=20&c=C98AZ1rgWUGJAxNgVNa5mQc9jckZQvM0hgv9AiPcQpc=', 
      description: 'Training in plumbing systems, pipe fitting, installation, and maintenance of water supply and drainage systems.'
    },
    {
  id: 6,
  title: 'H.S.I',
  icon: ShieldCheck, 
  image: 'https://hsiassetstorage.sfo2.digitaloceanspaces.com/assets/images/solutions/employee-training-topics-HSI.jpg', 
  description: 'Professional training in public health, hygiene, and sanitation practices for community well-being.'
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
      
      <div className="p-4">
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
    <div className="bg-white py-12">
      <div className="container mx-auto px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Trades
          </h2>
          
          <p className="text-lg text-green-600 font-medium max-w-4xl mx-auto">
            "SHAPING TOMORROW WITH QUALITY EDUCATION AND SKILL DEVELOPMENT!"
          </p>
           <p className="text-md text-gray-600 mt-2 italic">
    All trades NCVT qualified with skilled and experienced staff
  </p>
        </div>

        {/* Trades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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