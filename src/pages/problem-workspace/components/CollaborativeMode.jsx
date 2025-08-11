import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CollaborativeMode = ({ isActive, onToggle, onInviteUser }) => {
  const [inviteEmail, setInviteEmail] = useState('');
  const [isInviting, setIsInviting] = useState(false);

  const activeCollaborators = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@university.edu",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      status: "online",
      cursor: { line: 15, column: 8 },
      color: "#10B981"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      email: "mike.r@university.edu",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      status: "typing",
      cursor: { line: 23, column: 12 },
      color: "#F59E0B"
    }
  ];

  const handleInvite = async () => {
    if (!inviteEmail?.trim()) return;
    
    setIsInviting(true);
    try {
      await onInviteUser(inviteEmail);
      setInviteEmail('');
    } catch (error) {
      console.error('Failed to invite user:', error);
    } finally {
      setIsInviting(false);
    }
  };

  if (!isActive) {
    return (
      <div className="border-b border-border p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Users" size={20} className="text-muted-foreground" />
            <div>
              <h3 className="font-medium text-foreground">Collaborative Mode</h3>
              <p className="text-sm text-muted-foreground">Code together in real-time</p>
            </div>
          </div>
          <Button variant="outline" onClick={onToggle} iconName="UserPlus" iconPosition="left">
            Start Session
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border bg-background">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="Users" size={20} className="text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Live Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                {activeCollaborators?.length} collaborator{activeCollaborators?.length !== 1 ? 's' : ''} online
              </p>
            </div>
          </div>
          <Button variant="ghost" onClick={onToggle} iconName="X" />
        </div>

        {/* Active Collaborators */}
        <div className="space-y-3 mb-4">
          {activeCollaborators?.map((collaborator) => (
            <div key={collaborator?.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={collaborator?.avatar}
                    alt={collaborator?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div 
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                      collaborator?.status === 'online' ? 'bg-green-500' : 
                      collaborator?.status === 'typing' ? 'bg-blue-500' : 'bg-gray-400'
                    }`}
                  ></div>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{collaborator?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {collaborator?.status === 'typing' ? 'Typing...' : 
                     collaborator?.status === 'online' ? 'Online' : 'Away'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: collaborator?.color }}
                  title="Cursor color"
                ></div>
                <span className="text-xs text-muted-foreground font-mono">
                  L{collaborator?.cursor?.line}:C{collaborator?.cursor?.column}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Invite New Collaborator */}
        <div className="space-y-3">
          <h4 className="font-medium text-foreground text-sm">Invite Collaborator</h4>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter email address"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e?.target?.value)}
              className="flex-1"
            />
            <Button
              onClick={handleInvite}
              loading={isInviting}
              disabled={!inviteEmail?.trim()}
              iconName="Send"
              iconPosition="left"
            >
              Invite
            </Button>
          </div>
        </div>

        {/* Collaboration Features */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="ghost" size="sm" iconName="Video" iconPosition="left">
              Video Call
            </Button>
            <Button variant="ghost" size="sm" iconName="MessageCircle" iconPosition="left">
              Chat
            </Button>
            <Button variant="ghost" size="sm" iconName="Share" iconPosition="left">
              Share Screen
            </Button>
            <Button variant="ghost" size="sm" iconName="GitBranch" iconPosition="left">
              Version Control
            </Button>
          </div>
        </div>

        {/* Session Info */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="text-blue-800 font-medium">Session Active</p>
              <p className="text-blue-700 text-xs mt-1">
                All changes are synchronized in real-time. Session will end when all collaborators leave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeMode;