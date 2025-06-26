
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const FinancialPlanning = () => {
  const [startupCosts, setStartupCosts] = useState([
    { item: 'Equipment & Technology', amount: '' },
    { item: 'Initial Inventory', amount: '' },
    { item: 'Marketing & Advertising', amount: '' },
    { item: 'Legal & Professional Fees', amount: '' },
    { item: 'Working Capital', amount: '' },
  ]);

  const [monthlyExpenses, setMonthlyExpenses] = useState([
    { item: 'Rent/Utilities', amount: '' },
    { item: 'Salaries & Benefits', amount: '' },
    { item: 'Marketing', amount: '' },
    { item: 'Insurance', amount: '' },
    { item: 'Other Operating Expenses', amount: '' },
  ]);

  const [revenueProjections, setRevenueProjections] = useState({
    year1: '',
    year2: '',
    year3: '',
    pricingModel: '',
  });

  const updateStartupCost = (index: number, field: 'item' | 'amount', value: string) => {
    const updated = [...startupCosts];
    updated[index][field] = value;
    setStartupCosts(updated);
  };

  const updateMonthlyExpense = (index: number, field: 'item' | 'amount', value: string) => {
    const updated = [...monthlyExpenses];
    updated[index][field] = value;
    setMonthlyExpenses(updated);
  };

  const addStartupCost = () => {
    setStartupCosts([...startupCosts, { item: '', amount: '' }]);
  };

  const addMonthlyExpense = () => {
    setMonthlyExpenses([...monthlyExpenses, { item: '', amount: '' }]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Financial Planning
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              Step 3 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Plan your financial requirements, projections, and funding strategy to ensure business viability.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="startup" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="startup">Startup Costs</TabsTrigger>
              <TabsTrigger value="revenue">Revenue Model</TabsTrigger>
              <TabsTrigger value="funding">Funding Strategy</TabsTrigger>
            </TabsList>

            <TabsContent value="startup" className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-base font-medium">Initial Startup Costs</Label>
                  <Button variant="outline" size="sm" onClick={addStartupCost}>
                    Add Item
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {startupCosts.map((cost, index) => (
                    <div key={index} className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="Cost item"
                        value={cost.item}
                        onChange={(e) => updateStartupCost(index, 'item', e.target.value)}
                      />
                      <Input
                        placeholder="$0"
                        value={cost.amount}
                        onChange={(e) => updateStartupCost(index, 'amount', e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-base font-medium">Monthly Operating Expenses</Label>
                  <Button variant="outline" size="sm" onClick={addMonthlyExpense}>
                    Add Item
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {monthlyExpenses.map((expense, index) => (
                    <div key={index} className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="Expense item"
                        value={expense.item}
                        onChange={(e) => updateMonthlyExpense(index, 'item', e.target.value)}
                      />
                      <Input
                        placeholder="$0"
                        value={expense.amount}
                        onChange={(e) => updateMonthlyExpense(index, 'amount', e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pricingModel">Revenue/Pricing Model</Label>
                <Input
                  id="pricingModel"
                  placeholder="e.g., Subscription, One-time purchase, Freemium..."
                  value={revenueProjections.pricingModel}
                  onChange={(e) => setRevenueProjections(prev => ({ ...prev, pricingModel: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year1Revenue">Year 1 Revenue Projection</Label>
                  <Input
                    id="year1Revenue"
                    placeholder="$0"
                    value={revenueProjections.year1}
                    onChange={(e) => setRevenueProjections(prev => ({ ...prev, year1: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year2Revenue">Year 2 Revenue Projection</Label>
                  <Input
                    id="year2Revenue"
                    placeholder="$0"
                    value={revenueProjections.year2}
                    onChange={(e) => setRevenueProjections(prev => ({ ...prev, year2: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year3Revenue">Year 3 Revenue Projection</Label>
                  <Input
                    id="year3Revenue"
                    placeholder="$0"
                    value={revenueProjections.year3}
                    onChange={(e) => setRevenueProjections(prev => ({ ...prev, year3: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="unitPrice">Average Unit Price</Label>
                  <Input
                    id="unitPrice"
                    placeholder="$0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customerAcquisition">Customer Acquisition Cost</Label>
                  <Input
                    id="customerAcquisition"
                    placeholder="$0"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="funding" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fundingNeeded">Total Funding Required</Label>
                <Input
                  id="fundingNeeded"
                  placeholder="$0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fundingSources">Potential Funding Sources</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Personal Savings', 'Bank Loan', 'Angel Investors', 'Venture Capital', 'Crowdfunding', 'Grants', 'Friends & Family', 'Other'].map((source) => (
                    <label key={source} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{source}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="breakEven">Break-even Timeline</Label>
                <Input
                  id="breakEven"
                  placeholder="e.g., 18 months"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roi">Expected Return on Investment</Label>
                <Input
                  id="roi"
                  placeholder="e.g., 25% annually"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline">
              Previous: Market Analysis
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Next: Action Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
