import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const MiscOptions = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Misc. Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="keepTcpConnection" defaultChecked />
          <Label htmlFor="keepTcpConnection">Keep TCP Connection Active</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="redundantOwner" />
          <Label htmlFor="redundantOwner">Redundant Owner</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiscOptions;