import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const MiscOptions = ({ className }) => {
  return (
    <Card className={`bg-dark-300 border-dark-300 ${className}`}>
      <CardHeader>
        <CardTitle className="text-light-100 text-lg font-medium">Misc. Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="keepTcpConnection" defaultChecked className="border-light-300" />
          <Label htmlFor="keepTcpConnection" className="text-light-200 text-sm">Keep TCP Connection Active</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="redundantOwner" className="border-light-300" />
          <Label htmlFor="redundantOwner" className="text-light-200 text-sm">Redundant Owner</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiscOptions;