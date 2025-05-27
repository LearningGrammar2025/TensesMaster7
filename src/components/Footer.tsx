import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { universityData } from '../data/team-data';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TenseMaster
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              An interactive educational platform designed to help students master English tenses in a fun and engaging way.
            </p>
            <div className="pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href={universityData.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                  <span>Visit University</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-600 hover:text-primary">Home</Link>
              <Link to="/learn" className="block text-sm text-gray-600 hover:text-primary">Learn Tenses</Link>
              <Link to="/quiz" className="block text-sm text-gray-600 hover:text-primary">Practice Quiz</Link>
              <Link to="/progress" className="block text-sm text-gray-600 hover:text-primary">Your Progress</Link>
              <Link to="/about" className="block text-sm text-gray-600 hover:text-primary">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">University Information</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">{universityData.name}</p>
              <p>{universityData.address}</p>
              <a 
                href={universityData.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center space-x-1"
              >
                <span>{universityData.website}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TenseMaster. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Created by Group 6 - UIN Saizu Purwokerto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;