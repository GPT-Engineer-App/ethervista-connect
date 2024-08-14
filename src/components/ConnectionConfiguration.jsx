import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OriginatorToTarget from './OriginatorToTarget';
import TargetToOriginator from './TargetToOriginator';
import ConfigurationData from './ConfigurationData';

const ConnectionConfiguration = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Connection Configuration</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OriginatorToTarget />
        <TargetToOriginator />
        <ConfigurationData className="col-span-full" />
      </CardContent>
    </Card>
  );
};

export default ConnectionConfiguration;