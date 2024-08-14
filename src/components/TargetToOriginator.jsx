import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TargetToOriginator = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Target to Originator (T → O) Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup defaultValue="instanceId">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="instanceId" id="tInstanceId" />
            <Label htmlFor="tInstanceId">Instance ID</Label>
            <Input type="number" defaultValue={101} className="w-20 ml-2" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tagName" id="tTagName" />
            <Label htmlFor="tTagName">Tag Name</Label>
            <Input type="text" className="w-full ml-2" />
          </div>
        </RadioGroup>
        
        <div className="flex items-center space-x-2">
          <Label>Data Size (bytes)</Label>
          <Input type="number" defaultValue={14} className="w-20" />
          <Checkbox id="tRunIdleHeader" />
          <Label htmlFor="tRunIdleHeader">Run/Idle Header</Label>
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
          <Select defaultValue="multicast">
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
          <Label>Misc. Options</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="keepTcpConnection" defaultChecked />
              <Label htmlFor="keepTcpConnection">Keep TCP Connection Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="redundantOwner" />
              <Label htmlFor="redundantOwner">Redundant Owner</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TargetToOriginator;