import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OriginatorToTarget = () => {
  return (
    <Card className="bg-dark-300 border-dark-300">
      <CardHeader>
        <CardTitle className="text-light-100 text-lg font-medium">Originator to Target (O → T) Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="instanceId" className="text-light-200 text-sm">Instance ID</Label>
          <Input id="instanceId" type="number" defaultValue={100} className="w-20 bg-dark-200 border-dark-300 text-light-100 text-sm" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Label className="text-light-200 text-sm">Data Size (bytes)</Label>
          <Input type="number" defaultValue={2} className="w-20 bg-dark-200 border-dark-300 text-light-100 text-sm" />
          <Checkbox id="runIdleHeader" className="border-light-300 text-light-100" />
          <Label htmlFor="runIdleHeader" className="text-light-200 text-sm">Run/Idle Header</Label>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-light-200 text-sm">Packet Rate (ms)</Label>
            <Input type="number" defaultValue={100} className="bg-dark-200 border-dark-300 text-light-100 text-sm" />
          </div>
          <div>
            <Label className="text-light-200 text-sm">Production Inhibit (ms)</Label>
            <Input type="number" defaultValue={0} className="bg-dark-200 border-dark-300 text-light-100 text-sm" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-light-200 text-sm">Transport Type</Label>
          <Select defaultValue="pointToPoint">
            <SelectTrigger className="bg-dark-200 border-dark-300 text-light-100 text-sm">
              <SelectValue placeholder="Select transport type" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-dark-300 text-light-100">
              <SelectItem value="pointToPoint">Point to point</SelectItem>
              <SelectItem value="multicast">Multicast</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label className="text-light-200 text-sm">Data Size Type</Label>
          <Select defaultValue="fixedSize">
            <SelectTrigger className="bg-dark-200 border-dark-300 text-light-100 text-sm">
              <SelectValue placeholder="Select data size type" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-dark-300 text-light-100">
              <SelectItem value="fixedSize">Fixed size</SelectItem>
              <SelectItem value="variableSize">Variable size</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label className="text-light-200 text-sm">Priority</Label>
          <Select defaultValue="scheduled">
            <SelectTrigger className="bg-dark-200 border-dark-300 text-light-100 text-sm">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent className="bg-dark-200 border-dark-300 text-light-100">
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OriginatorToTarget;