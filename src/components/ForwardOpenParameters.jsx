import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ForwardOpenParameters = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Forward Open Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Transport Trigger</Label>
          <Select defaultValue="cyclic">
            <SelectTrigger>
              <SelectValue placeholder="Select transport trigger" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cyclic">Cyclic</SelectItem>
              <SelectItem value="changeOfState">Change of State</SelectItem>
              <SelectItem value="application">Application</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Timeout Multiplier</Label>
          <Input type="number" defaultValue={16} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ForwardOpenParameters;