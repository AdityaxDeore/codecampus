import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
    codeSnippet: '',
    isQuestion: false
  });

  const categoryOptions = [
    { value: 'study-groups', label: 'Study Groups' },
    { value: 'project-collaboration', label: 'Project Collaboration' },
    { value: 'career-advice', label: 'Career Advice' },
    { value: 'technical-help', label: 'Technical Help' },
    { value: 'industry-insights', label: 'Industry Insights' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (formData?.title?.trim() && formData?.content?.trim() && formData?.category) {
      onSubmit({
        ...formData,
        tags: formData?.tags?.split(',')?.map(tag => tag?.trim())?.filter(tag => tag),
        timestamp: new Date()?.toISOString()
      });
      setFormData({
        title: '',
        content: '',
        category: '',
        tags: '',
        codeSnippet: '',
        isQuestion: false
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg academic-shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Create New Post</h2>
          <Button variant="ghost" size="sm" iconName="X" onClick={onClose} />
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Post Type Toggle */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData?.isQuestion}
                onChange={(e) => handleInputChange('isQuestion', e?.target?.checked)}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-sm text-foreground">This is a question</span>
            </label>
            {formData?.isQuestion && (
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Icon name="HelpCircle" size={16} />
                <span>Questions get priority visibility</span>
              </div>
            )}
          </div>

          {/* Title */}
          <Input
            label="Title"
            type="text"
            placeholder={formData?.isQuestion ? "What's your question?" : "What would you like to discuss?"}
            value={formData?.title}
            onChange={(e) => handleInputChange('title', e?.target?.value)}
            required
          />

          {/* Category */}
          <Select
            label="Category"
            options={categoryOptions}
            value={formData?.category}
            onChange={(value) => handleInputChange('category', value)}
            placeholder="Select a category"
            required
          />

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Content <span className="text-destructive">*</span>
            </label>
            <textarea
              value={formData?.content}
              onChange={(e) => handleInputChange('content', e?.target?.value)}
              placeholder="Share your thoughts, ask questions, or provide insights..."
              className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              rows="6"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Supports Markdown formatting. Use **bold**, *italic*, `code`, and more.
            </p>
          </div>

          {/* Code Snippet */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Code Snippet (Optional)
            </label>
            <textarea
              value={formData?.codeSnippet}
              onChange={(e) => handleInputChange('codeSnippet', e?.target?.value)}
              placeholder="Paste your code here..."
              className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-muted font-mono text-sm"
              rows="4"
            />
          </div>

          {/* Tags */}
          <Input
            label="Tags"
            type="text"
            placeholder="javascript, react, algorithms (comma-separated)"
            value={formData?.tags}
            onChange={(e) => handleInputChange('tags', e?.target?.value)}
            description="Add relevant tags to help others find your post"
          />

          {/* Preview Section */}
          {(formData?.title || formData?.content) && (
            <div className="border border-border rounded-lg p-4 bg-muted/30">
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
                <Icon name="Eye" size={16} className="mr-2" />
                Preview
              </h4>
              <div className="space-y-2">
                {formData?.title && (
                  <h3 className="font-semibold text-foreground">{formData?.title}</h3>
                )}
                {formData?.content && (
                  <p className="text-sm text-foreground leading-relaxed">
                    {formData?.content?.substring(0, 200)}
                    {formData?.content?.length > 200 && '...'}
                  </p>
                )}
                {formData?.tags && (
                  <div className="flex flex-wrap gap-1">
                    {formData?.tags?.split(',')?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        #{tag?.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              disabled={!formData?.title?.trim() || !formData?.content?.trim() || !formData?.category}
            >
              {formData?.isQuestion ? 'Ask Question' : 'Create Post'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;