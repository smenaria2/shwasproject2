import React from 'react';

export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Share Your Thoughts</h2>
      <div className="w-full overflow-hidden" style={{ height: '800px' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekKjax4mDkhiAXoZ1PiKrJaQwJgPXKzS-CnqgbKC4OWmseSg/viewform?embedded=true"
          className="w-full h-full"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
}