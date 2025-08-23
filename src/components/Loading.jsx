import React from 'react';
import Icon from './AppIcon';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin text-blue-600 mb-4">
          <Icon name="Loader2" size={32} />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Loading...</h2>
        <p className="text-sm text-gray-600">Just a moment please</p>
      </div>
    </div>
  );
};

export default Loading;
