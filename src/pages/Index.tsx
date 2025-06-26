
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BusinessOverview } from '@/components/BusinessOverview';
import { MarketAnalysis } from '@/components/MarketAnalysis';
import { FinancialPlanning } from '@/components/FinancialPlanning';
import { ActionPlan } from '@/components/ActionPlan';
import { AIInsights } from '@/components/AIInsights';
import { lightbulb, briefcase, chart-bar, settings, file-text } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [planProgress, setPlanProgress] = useState(25);

  const planSections = [
    { id: 'overview', label: 'Business Overview', icon: briefcase, completed: true },
    { id: 'market', label: 'Market Analysis', icon: chart-bar, completed: false },
    { id: 'financial', label: 'Financial Planning', icon: chart-bar, completed: false },
    { id: 'action', label: 'Action Plan', icon: file-text, completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Business Planner</h1>
                <p className="text-sm text-gray-600">Transform your ideas into actionable business plans</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {planProgress}% Complete
              </Badge>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Export Plan
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Plan Progress</CardTitle>
                <CardDescription>Complete each section to build your comprehensive business plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{planProgress}%</span>
                  </div>
                  <Progress value={planProgress} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  {planSections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <div
                        key={section.id}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                          activeTab === section.id
                            ? 'bg-blue-50 border-l-4 border-blue-600'
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveTab(section.id)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          section.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-4 h-4 ${
                            section.completed ? 'text-green-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{section.label}</p>
                          <p className="text-xs text-gray-500">
                            {section.completed ? 'Completed' : 'Pending'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="market">Market</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="action">Action Plan</TabsTrigger>
              </TabsList>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <TabsContent value="overview" className="mt-0">
                    <BusinessOverview />
                  </TabsContent>
                  <TabsContent value="market" className="mt-0">
                    <MarketAnalysis />
                  </TabsContent>
                  <TabsContent value="financial" className="mt-0">
                    <FinancialPlanning />
                  </TabsContent>
                  <TabsContent value="action" className="mt-0">
                    <ActionPlan />
                  </TabsContent>
                </div>

                <div className="xl:col-span-1">
                  <AIInsights activeSection={activeTab} />
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
