import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Reader Reviews</h2>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <iframe 
              src='https://widgets.sociablekit.com/amazon-reviews/iframe/25489824' 
              frameBorder='0' 
              width='100%' 
              height='1000'
              className="w-full rounded-lg"
              title="Amazon Reviews"
            />
          </div>
        </div>
      </div>
    </div>
  );
}