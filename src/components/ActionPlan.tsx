
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ActionPlan = () => {
  const [milestones, setMilestones] = useState([
    { task: 'Complete business registration', deadline: '', priority: 'high', completed: false },
    { task: 'Secure initial funding', deadline: '', priority: 'high', completed: false },
    { task: 'Develop MVP/prototype', deadline: '', priority: 'medium', completed: false },
    { task: 'Launch marketing campaign', deadline: '', priority: 'medium', completed: false },
    { task: 'Hire first employees', deadline: '', priority: 'low', completed: false },
  ]);

  const [risks, setRisks] = useState([
    { risk: '', mitigation: '', probability: 'medium' },
    { risk: '', mitigation: '', probability: 'medium' },
    { risk: '', mitigation: '', probability: 'medium' },
  ]);

  const updateMilestone = (index: number, field: string, value: string | boolean) => {
    const updated = [...milestones];
    updated[index] = { ...updated[index], [field]: value };
    setMilestones(updated);
  };

  const updateRisk = (index: number, field: string, value: string) => {
    const updated = [...risks];
    updated[index] = { ...updated[index], [field]: value };
    setRisks(updated);
  };

  const addMilestone = () => {
    setMilestones([...milestones, { task: '', deadline: '', priority: 'medium', completed: false }]);
  };

  const addRisk = () => {
    setRisks([...risks, { risk: '', mitigation: '', probability: 'medium' }]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Action Plan & Implementation
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Step 4 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Create a detailed roadmap with milestones, timelines, and risk management strategies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Milestones */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-lg font-medium">Key Milestones & Tasks</Label>
              <Button variant="outline" size="sm" onClick={addMilestone}>
                Add Milestone
              </Button>
            </div>
            
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Checkbox
                        checked={milestone.completed}
                        onCheckedChange={(checked) => updateMilestone(index, 'completed', checked)}
                      />
                      <Input
                        placeholder="Task or milestone"
                        value={milestone.task}
                        onChange={(e) => updateMilestone(index, 'task', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <Badge variant="outline" className={getPriorityColor(milestone.priority)}>
                      {milestone.priority}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pl-6">
                    <div className="space-y-1">
                      <Label className="text-sm">Deadline</Label>
                      <Input
                        type="date"
                        value={milestone.deadline}
                        onChange={(e) => updateMilestone(index, 'deadline', e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm">Priority</Label>
                      <Select 
                        value={milestone.priority} 
                        onValueChange={(value) => updateMilestone(index, 'priority', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-lg font-medium">Risk Management</Label>
              <Button variant="outline" size="sm" onClick={addRisk}>
                Add Risk
              </Button>
            </div>
            
            <div className="space-y-4">
              {risks.map((risk, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label className="text-sm">Risk/Challenge</Label>
                      <Textarea
                        placeholder="Describe the potential risk..."
                        value={risk.risk}
                        onChange={(e) => updateRisk(index, 'risk', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm">Mitigation Strategy</Label>
                      <Textarea
                        placeholder="How will you address this risk?"
                        value={risk.mitigation}
                        onChange={(e) => updateRisk(index, 'mitigation', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm">Probability</Label>
                      <Select 
                        value={risk.probability} 
                        onValueChange={(value) => updateRisk(index, 'probability', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div>
            <Label className="text-lg font-medium mb-4 block">Success Metrics & KPIs</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Revenue Target (Year 1)</Label>
                <Input placeholder="$0" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Customer Target (Year 1)</Label>
                <Input placeholder="0 customers" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Market Share Goal</Label>
                <Input placeholder="0%" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Employee Count Target</Label>
                <Input placeholder="0 employees" />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline">
              Previous: Financial Planning
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Complete Business Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
