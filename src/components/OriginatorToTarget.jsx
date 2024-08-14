import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OriginatorToTarget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Originator to Target (O → T) Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup defaultValue="instanceId">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="instanceId" id="instanceId" />
            <Label htmlFor="instanceId">Instance ID</Label>
            <Input type="number" defaultValue={100} className="w-20 ml-2" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tagName" id="tagName" />
            <Label htmlFor="tagName">Tag Name</Label>
            <Input type="text" className="w-full ml-2" />
          </div>
        </RadioGroup>
        
        <div className="flex items-center space-x-2">
          <Label>Data Size (bytes)</Label>
          <Input type="number" defaultValue={2} className="w-20" />
          <Checkbox id="runIdleHeader" />
          <Label htmlFor="runIdleHeader">Run/Idle Header</Label>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Packet Rate (ms)</Label>
            <Input type="number" defaultValue={100} />
          </div>
          <div>
            <Label>Production Inhibit (ms)</Label>
            <Input type="number" defaultValue={0} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Transport Type</Label>
          <Select defaultValue="pointToPoint">
            <SelectTrigger>
              <SelectValue placeholder="Select transport type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pointToPoint">Point to point</SelectItem>
              <SelectItem value="multicast">Multicast</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Data Size Type</Label>
          <Select defaultValue="fixedSize">
            <SelectTrigger>
              <SelectValue placeholder="Select data size type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixedSize">Fixed size</SelectItem>
              <SelectItem value="variableSize">Variable size</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Priority</Label>
          <Select defaultValue="scheduled">
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Forward Open Parameters</Label>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default OriginatorToTarget;