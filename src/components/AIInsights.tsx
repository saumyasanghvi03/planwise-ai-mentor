
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { lightbulb } from 'lucide-react';

interface AIInsightsProps {
  activeSection: string;
}

export const AIInsights = ({ activeSection }: AIInsightsProps) => {
  const getInsights = () => {
    switch (activeSection) {
      case 'overview':
        return {
          title: 'Business Overview Insights',
          tips: [
            'Keep your mission statement concise and memorable - under 30 words is ideal',
            'Ensure your business description clearly explains the value you provide to customers',
            'Consider how your vision aligns with current market trends and future opportunities'
          ],
          suggestions: [
            'Research successful companies in your industry for mission statement inspiration',
            'Survey potential customers to validate your target market assumptions',
            'Consider creating a one-page business model canvas'
          ]
        };
      case 'market':
        return {
          title: 'Market Analysis Insights',
          tips: [
            'Use the TAM-SAM-SOM framework: Total Addressable Market, Serviceable Available Market, Serviceable Obtainable Market',
            'Focus on 3-5 direct competitors rather than listing every possible competitor',
            'Quantify your competitive advantages with specific metrics when possible'
          ],
          suggestions: [
            'Conduct primary research through surveys or interviews with potential customers',
            'Use tools like Google Trends, industry reports, and competitor analysis',
            'Consider creating customer personas based on your target market research'
          ]
        };
      case 'financial':
        return {
          title: 'Financial Planning Insights',
          tips: [
            'Always overestimate expenses and underestimate revenue for more realistic projections',
            'Plan for at least 6-12 months of operating expenses as a cash buffer',
            'Consider multiple revenue streams to reduce dependency on a single source'
          ],
          suggestions: [
            'Use the 40-40-20 rule: 40% for core business, 40% for growth, 20% for contingency',
            'Research industry benchmarks for customer acquisition costs and lifetime value',
            'Create best-case, worst-case, and most likely financial scenarios'
          ]
        };
      case 'action':
        return {
          title: 'Action Plan Insights',
          tips: [
            'Use SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound',
            'Identify dependencies between tasks to create a logical sequence',
            'Plan for setbacks - most startups take 2-3x longer than initially planned'
          ],
          suggestions: [
            'Break large milestones into smaller, weekly actionable tasks',
            'Set up regular review meetings to track progress and adjust plans',
            'Consider using project management tools to track your progress'
          ]
        };
      default:
        return {
          title: 'AI Business Insights',
          tips: ['Complete each section thoroughly to get the most valuable insights'],
          suggestions: ['Start with the Business Overview to establish your foundation']
        };
    }
  };

  const insights = getInsights();

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <lightbulb className="w-4 h-4 text-white" />
            </div>
            <span>{insights.title}</span>
          </CardTitle>
          <CardDescription>
            AI-powered suggestions to improve your business plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2 flex items-center">
              <Badge variant="secondary" className="mr-2 bg-green-100 text-green-800">Tips</Badge>
            </h4>
            <ul className="space-y-2">
              {insights.tips.map((tip, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-2 flex items-center">
              <Badge variant="secondary" className="mr-2 bg-purple-100 text-purple-800">Suggestions</Badge>
            </h4>
            <ul className="space-y-2">
              {insights.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">AI Assistant</CardTitle>
          <CardDescription>Get personalized recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            💡 Generate business ideas
          </Button>
          <Button variant="outline" className="w-full justify-start">
            📊 Analyze competition
          </Button>
          <Button variant="outline" className="w-full justify-start">
            💰 Suggest funding sources
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🎯 Refine target market
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h4 className="font-medium text-green-800">Ready to launch?</h4>
            <p className="text-sm text-green-700">Export your complete business plan</p>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
