import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MarketAnalysisProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const MarketAnalysis = ({ onPrevious, onNext }: MarketAnalysisProps) => {
  const [competitors, setCompetitors] = useState(['', '', '']);
  const [swotData, setSWOTData] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
  });

  const addCompetitor = () => {
    setCompetitors([...competitors, '']);
  };

  const updateCompetitor = (index: number, value: string) => {
    const updated = [...competitors];
    updated[index] = value;
    setCompetitors(updated);
  };

  const handleSWOTChange = (field: string, value: string) => {
    setSWOTData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Market Analysis
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Step 2 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Analyze your market environment, competition, and strategic position to make informed decisions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="market" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="market">Market Size</TabsTrigger>
              <TabsTrigger value="competition">Competition</TabsTrigger>
              <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="market" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="marketSize">Total Addressable Market (TAM)</Label>
                  <Input
                    id="marketSize"
                    placeholder="e.g., $10 billion"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marketGrowth">Market Growth Rate</Label>
                  <Input
                    id="marketGrowth"
                    placeholder="e.g., 15% annually"
                    type="text"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="marketTrends">Market Trends & Opportunities</Label>
                <Textarea
                  id="marketTrends"
                  placeholder="Describe current market trends, emerging opportunities, and industry shifts..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerNeeds">Customer Pain Points & Needs</Label>
                <Textarea
                  id="customerNeeds"
                  placeholder="What problems does your target market face? What needs are currently unmet?"
                  rows={4}
                />
              </div>
            </TabsContent>

            <TabsContent value="competition" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Key Competitors</Label>
                  <Button variant="outline" size="sm" onClick={addCompetitor}>
                    Add Competitor
                  </Button>
                </div>
                
                {competitors.map((competitor, index) => (
                  <div key={index} className="space-y-2">
                    <Input
                      placeholder={`Competitor ${index + 1} name`}
                      value={competitor}
                      onChange={(e) => updateCompetitor(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="competitiveAdvantage">Your Competitive Advantage</Label>
                <Textarea
                  id="competitiveAdvantage"
                  placeholder="What makes your business unique? How do you differentiate from competitors?"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marketPosition">Market Positioning Strategy</Label>
                <Textarea
                  id="marketPosition"
                  placeholder="How do you want to position your business in the market? What's your unique value proposition?"
                  rows={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="swot" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="strengths">Strengths</Label>
                  <Textarea
                    id="strengths"
                    placeholder="Internal positive factors..."
                    rows={4}
                    value={swotData.strengths}
                    onChange={(e) => handleSWOTChange('strengths', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weaknesses">Weaknesses</Label>
                  <Textarea
                    id="weaknesses"
                    placeholder="Internal areas for improvement..."
                    rows={4}
                    value={swotData.weaknesses}
                    onChange={(e) => handleSWOTChange('weaknesses', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="opportunities">Opportunities</Label>
                  <Textarea
                    id="opportunities"
                    placeholder="External positive factors..."
                    rows={4}
                    value={swotData.opportunities}
                    onChange={(e) => handleSWOTChange('opportunities', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="threats">Threats</Label>
                  <Textarea
                    id="threats"
                    placeholder="External challenges or risks..."
                    rows={4}
                    value={swotData.threats}
                    onChange={(e) => handleSWOTChange('threats', e.target.value)}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline" onClick={onPrevious}>
              Previous: Overview
            </Button>
            <Button 
              onClick={onNext}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Next: Financial Planning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
