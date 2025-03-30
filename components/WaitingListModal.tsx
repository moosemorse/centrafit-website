"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export function WaitingListModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    // Close modal after 2 seconds of showing success message
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <>
      {/* Enhanced button that opens the modal */}
      <Button 
        onClick={() => setIsOpen(true)}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                  text-white font-bold py-3 px-8 text-lg rounded-xl shadow-lg transform transition-all 
                  duration-200 hover:scale-105 hover:shadow-xl"
      >
        Join Waiting List
      </Button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Modal container */}
          <div 
            className="bg-black border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-md mx-4 relative z-10 animate-in slide-in-from-bottom-10 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h2 className="font-eras text-2xl text-white mb-6">Join Our Waiting List</h2>
            
            {submitted ? (
              <div className="text-center py-8 text-green-400">
                <p className="text-xl mb-2">Thanks for joining!</p>
                <p>We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white 
                              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 
                           hover:to-blue-600 text-white font-bold py-3 text-base rounded-lg"
                >
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}