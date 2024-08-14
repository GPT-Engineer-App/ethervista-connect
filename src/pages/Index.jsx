import React from 'react';
import ConnectionConfiguration from '../components/ConnectionConfiguration';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">EtherNet/IP Driver Configuration</h1>
        <ConnectionConfiguration />
      </div>
    </div>
  );
};

export default Index;