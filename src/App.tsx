import React from 'react';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import Reviews from './components/Reviews';
import AuthorCard from './components/AuthorCard';
import ContactForm from './components/ContactForm';
import { authors } from './data/authors';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* About Book Section */}
      <AboutBook />

      {/* Reviews Section */}
      <Reviews />

      {/* Authors Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Meet the Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <ContactForm />
      </div>
    </div>
  );
}