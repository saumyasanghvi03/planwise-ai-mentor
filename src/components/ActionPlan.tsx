
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

export const ActionPlan = () => {
  const [milestones, setMilestones] = useState(['', '', '']);
  const [tasks, setTasks] = useState([
    { text: 'Register business name and legal structure', completed: false },
    { text: 'Open business bank account', completed: false },
    { text: 'Create MVP (Minimum Viable Product)', completed: false },
    { text: 'Launch marketing campaign', completed: false },
  ]);

  const addMilestone = () => {
    setMilestones([...milestones, '']);
  };

  const updateMilestone = (index: number, value: string) => {
    const updated = [...milestones];
    updated[index] = value;
    setMilestones(updated);
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Action Plan
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Step 4 of 4
            </Badge>
          </CardTitle>
          <CardDescription>
            Create a roadmap with specific milestones, tasks, and timelines to launch your business.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Key Milestones</Label>
              <Button variant="outline" size="sm" onClick={addMilestone}>
                Add Milestone
              </Button>
            </div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="space-y-2">
                <Input
                  placeholder={`Milestone ${index + 1} (e.g., Launch MVP in 3 months)`}
                  value={milestone}
                  onChange={(e) => updateMilestone(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Launch Timeline</Label>
            <Textarea
              id="timeline"
              placeholder="Describe your timeline for launching the business, key dates, and deadlines..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resources">Required Resources</Label>
            <Textarea
              id="resources"
              placeholder="What resources do you need? Team members, tools, partnerships, etc."
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <Label>Next Steps Checklist</Label>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`task-${index}`}
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(index)}
                  />
                  <label
                    htmlFor={`task-${index}`}
                    className={`text-sm ${
                      task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}
                  >
                    {task.text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="risks">Risk Assessment & Mitigation</Label>
            <Textarea
              id="risks"
              placeholder="What are the main risks to your business and how will you address them?"
              rows={4}
            />
          </div>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline">
              Previous: Financial Planning
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Complete Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
