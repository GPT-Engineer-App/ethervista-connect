import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ConfigurationData = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Configuration Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label>Instance ID</Label>
          <Input type="number" defaultValue={102} className="w-20" />
        </div>
        <div className="flex items-center space-x-2">
          <Label>Size (bytes)</Label>
          <Input type="number" defaultValue={178} className="w-20" />
        </div>
        <Textarea
          rows={6}
          defaultValue="00 00 00 00 07 00 00 00 00 00 01 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 02 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 04 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 05 08 7B 00 00 00 00 00 00 00 05 08 7B 00 00 00 00 00 00 00"
          className="font-mono text-sm"
        />
      </CardContent>
    </Card>
  );
};

export default ConfigurationData;