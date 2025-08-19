import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  BarChart3, 
  FileText, 
  BookOpen, 
  ImageIcon, 
  HelpCircle, 
  Monitor 
} from 'lucide-react';

const quickLinksData = [
  {
    id: 1,
    title: 'Online Admission',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Infrastructure',
    icon: Building2,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    title: 'Results',
    icon: BarChart3,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 4,
    title: 'Online Practice Test',
    icon: FileText,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 5,
    title: 'Syllabus',
    icon: BookOpen,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Gallery',
    icon: ImageIcon,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 7,
    title: 'Question Bank',
    icon: HelpCircle,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 8,
    title: 'E-Learning',
    icon: Monitor,
    gradient: 'from-indigo-500 to-blue-600',
  }
];

interface QuickLinkCardProps {
  title: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

function QuickLinkCard({ title, icon: Icon, gradient }: QuickLinkCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg cursor-pointer border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          
          <button className={`px-6 py-2 bg-gradient-to-r ${gradient} text-white font-medium rounded-md text-sm`}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuickLinks() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quick Links
          </h2>
          
          <p className="text-lg text-green-600 font-medium max-w-2xl mx-auto">
            "TRANSFORMING TODAY'S LEARNERS INTO TOMORROW'S LEADERS!"
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinksData.map((link) => (
            <QuickLinkCard
              key={link.id}
              title={link.title}
              icon={link.icon}
              gradient={link.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}