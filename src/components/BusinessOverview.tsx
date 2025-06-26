
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const BusinessOverview = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    industry: '',
    description: '',
    mission: '',
    vision: '',
    targetMarket: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 
    'Education', 'Real Estate', 'Food & Beverage', 'Professional Services', 'Other'
  ];

  const businessTypes = [
    'Sole Proprietorship', 'Partnership', 'LLC', 'Corporation', 'S-Corporation', 'Non-Profit'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Business Overview
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Step 1 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Let's start with the basics of your business idea. This information will help our AI provide more targeted insights.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select business structure" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what your business does, the products or services you offer..."
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              placeholder="What is your business's purpose and core values?"
              rows={3}
              value={formData.mission}
              onChange={(e) => handleInputChange('mission', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vision">Vision Statement</Label>
            <Textarea
              id="vision"
              placeholder="Where do you see your business in 5-10 years?"
              rows={3}
              value={formData.vision}
              onChange={(e) => handleInputChange('vision', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetMarket">Target Market</Label>
            <Textarea
              id="targetMarket"
              placeholder="Who are your ideal customers? Describe their demographics, needs, and behaviors..."
              rows={3}
              value={formData.targetMarket}
              onChange={(e) => handleInputChange('targetMarket', e.target.value)}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Next: Market Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
