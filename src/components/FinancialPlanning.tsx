import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FinancialPlanningProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const FinancialPlanning = ({ onPrevious, onNext }: FinancialPlanningProps) => {
  const [financialData, setFinancialData] = useState({
    startupCosts: '',
    monthlyExpenses: '',
    revenueProjections: '',
    fundingNeeds: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFinancialData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Financial Planning
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Step 3 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Plan your financial projections, funding requirements, and revenue model.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="startup" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="startup">Startup Costs</TabsTrigger>
              <TabsTrigger value="revenue">Revenue Model</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
            </TabsList>

            <TabsContent value="startup" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="initialInvestment">Initial Investment</Label>
                  <Input
                    id="initialInvestment"
                    placeholder="$50,000"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthlyBurn">Monthly Burn Rate</Label>
                  <Input
                    id="monthlyBurn"
                    placeholder="$10,000"
                    type="text"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="startupBreakdown">Startup Cost Breakdown</Label>
                <Textarea
                  id="startupBreakdown"
                  placeholder="List your major startup expenses: equipment, inventory, marketing, legal fees, etc."
                  rows={4}
                />
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="revenueModel">Revenue Model</Label>
                <Textarea
                  id="revenueModel"
                  placeholder="Describe how your business will make money: pricing strategy, revenue streams, etc."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue">Projected Monthly Revenue (Year 1)</Label>
                  <Input
                    id="monthlyRevenue"
                    placeholder="$25,000"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="growthRate">Expected Growth Rate</Label>
                  <Input
                    id="growthRate"
                    placeholder="10% monthly"
                    type="text"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="funding" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fundingAmount">Funding Amount Needed</Label>
                <Input
                  id="fundingAmount"
                  placeholder="$100,000"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fundingSources">Potential Funding Sources</Label>
                <Textarea
                  id="fundingSources"
                  placeholder="Personal savings, angel investors, venture capital, bank loans, crowdfunding, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="useOfFunds">Use of Funds</Label>
                <Textarea
                  id="useOfFunds"
                  placeholder="How will you use the funding? Break down the allocation across different areas."
                  rows={4}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline" onClick={onPrevious}>
              Previous: Market Analysis
            </Button>
            <Button 
              onClick={onNext}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Next: Action Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
