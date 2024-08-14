import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OriginatorToTarget from './OriginatorToTarget';
import TargetToOriginator from './TargetToOriginator';
import ConfigurationData from './ConfigurationData';
import ForwardOpenParameters from './ForwardOpenParameters';
import MiscOptions from './MiscOptions';

const ConnectionConfiguration = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-dark-200 border-dark-300">
      <CardHeader>
        <CardTitle className="text-blue-500">Class 1 Connection Configuration</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OriginatorToTarget />
        <TargetToOriginator />
        <ForwardOpenParameters className="col-span-full" />
        <MiscOptions className="col-span-full" />
        <ConfigurationData className="col-span-full" />
      </CardContent>
    </Card>
  );
};

export default ConnectionConfiguration;