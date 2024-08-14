import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ConfigurationData = ({ className }) => {
  return (
    <Card className={`bg-dark-300 border-dark-300 ${className}`}>
      <CardHeader>
        <CardTitle className="text-light-100 text-lg font-medium">Configuration Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label className="text-light-200 text-sm">Instance ID</Label>
          <Input type="number" defaultValue={102} className="w-20 bg-dark-200 border-dark-300 text-light-100 text-sm" />
        </div>
        <div className="flex items-center space-x-2">
          <Label className="text-light-200 text-sm">Size (bytes)</Label>
          <Input type="number" defaultValue={178} className="w-20 bg-dark-200 border-dark-300 text-light-100 text-sm" />
        </div>
        <Textarea
          rows={6}
          defaultValue="00 00 00 00 07 00 00 00 00 00 01 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 02 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 04 20 67 00 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 E8 03 05 08 7B 00 00 00 00 00 00 00 05 08 7B 00 00 00 00 00 00 00"
          className="font-mono text-sm bg-dark-200 border-dark-300 text-light-100"
        />
      </CardContent>
    </Card>
  );
};

export default ConfigurationData;