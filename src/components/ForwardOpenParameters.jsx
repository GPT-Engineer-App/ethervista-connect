import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ForwardOpenParameters = ({ className }) => {
  return (
    <Card className={`bg-dark-300 border-dark-300 ${className}`}>
      <CardHeader>
        <CardTitle className="text-light-100 text-lg font-medium">Forward Open Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-light-200 text-sm">Transport Trigger</Label>
          <Select defaultValue="cyclic">
            <SelectTrigger className="bg-dark-200 border-dark-300 text-light-100 text-sm">
              <SelectValue placeholder="Select transport trigger" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-dark-300 text-light-100">
              <SelectItem value="cyclic">Cyclic</SelectItem>
              <SelectItem value="changeOfState">Change of State</SelectItem>
              <SelectItem value="application">Application</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-light-200 text-sm">Timeout Multiplier</Label>
          <Input type="number" defaultValue={16} className="bg-dark-200 border-dark-300 text-light-100 text-sm" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ForwardOpenParameters;