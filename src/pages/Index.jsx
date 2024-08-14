import React from 'react';
import ConnectionConfiguration from '../components/ConnectionConfiguration';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-100 text-light-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6 text-light-100">EtherNet/IP Driver Configuration</h1>
        <ConnectionConfiguration />
      </div>
    </div>
  );
};

export default Index;