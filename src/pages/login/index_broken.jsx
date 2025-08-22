import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Form state for login
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Here you would typically send the data to your backend
      // Process authentication with provided form data
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just navigate to dashboard
      navigate('/student-dashboard');
    } catch (error) {
      setErrors({ general: 'Sign in failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - CodeCampus</title>
        <meta name="description" content="Sign in to CodeCampus with your email address" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="relative w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <a href="/homepage" className="inline-flex items-center space-x-3 mb-6">
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="academic-transition hover:scale-105"
                >
                  <rect width="32" height="32" rx="8" fill="#3B82F6" />
                  <path d="M8 12L16 8L24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L16 14L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CodeCampus</h1>
              </div>
            </a>
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-300">
              Sign in to your CodeCampus account
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-700 p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm flex items-center space-x-1">
                    <Icon name="AlertCircle" size={14} />
                    <span>{errors.general}</span>
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                    <Icon name="AlertCircle" size={12} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                    <Icon name="AlertCircle" size={12} />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-500 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              By signing in, you agree to our{' '}
              <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="academic-transition hover:scale-105"
                >
                  <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
                  <path d="M8 12L16 8L24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L16 14L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">CodeCampus</h1>
              </div>
            </a>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {authMode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {authMode === 'signup' 
                ? 'Join CodeCampus with your college details' 
                : 'Sign in to your CodeCampus account'
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {/* Tab Navigation */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('manual')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'manual'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Manual {authMode === 'signup' ? 'Sign Up' : 'Sign In'}
              </button>
              <button
                onClick={() => setActiveTab('oauth')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'oauth'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                OAuth Login
              </button>
            </div>

            {/* Sign Up / Sign In Toggle for Manual Tab */}
            {activeTab === 'manual' && (
              <div className="flex mb-6 bg-blue-50 rounded-lg p-1">
                <button
                  onClick={() => handleAuthModeChange('signup')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    authMode === 'signup'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => handleAuthModeChange('signin')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    authMode === 'signin'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Sign In
                </button>
              </div>
            )}

            {/* Manual Login Form */}
            {activeTab === 'manual' && (
              <form onSubmit={handleManualLogin} className="space-y-4">
                {errors.general && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm flex items-center space-x-1">
                      <Icon name="AlertCircle" size={14} />
                      <span>{errors.general}</span>
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email / PRN / Roll No
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email, PRN, or roll number"
                    className={errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                      <Icon name="AlertCircle" size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {authMode === 'signup' && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                          <Icon name="AlertCircle" size={12} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                        Branch
                      </label>
                      <Select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        options={branchOptions}
                        className={errors.branch ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                      />
                      {errors.branch && (
                        <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                          <Icon name="AlertCircle" size={12} />
                          <span>{errors.branch}</span>
                        </p>
                      )}
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                      <Icon name="AlertCircle" size={12} />
                      <span>{errors.password}</span>
                    </p>
                  )}
                </div>

                {authMode === 'signup' && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className={errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                        <Icon name="AlertCircle" size={12} />
                        <span>{errors.confirmPassword}</span>
                      </p>
                    )}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full mt-6"
                >
                  {isLoading 
                    ? (authMode === 'signup' ? 'Creating Account...' : 'Signing In...') 
                    : (authMode === 'signup' ? 'Create Account' : 'Sign In')
                  }
                </Button>
              </form>
            )}

            {/* OAuth Login */}
            {activeTab === 'oauth' && (
              <div className="space-y-4">
                <div>
                  <Button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center justify-center space-x-3 py-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
                  </Button>
                  {errors.google && (
                    <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                      <Icon name="AlertCircle" size={14} />
                      <span>{errors.google}</span>
                    </p>
                  )}
                </div>

                <div>
                  <Button
                    onClick={handleMicrosoftLogin}
                    disabled={isLoading}
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center justify-center space-x-3 py-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#F25022" d="M1 1h10v10H1z" />
                      <path fill="#00A4EF" d="M13 1h10v10H13z" />
                      <path fill="#7FBA00" d="M1 13h10v10H1z" />
                      <path fill="#FFB900" d="M13 13h10v10H13z" />
                    </svg>
                    <span>{isLoading ? 'Signing in...' : 'Continue with Microsoft'}</span>
                  </Button>
                  {errors.microsoft && (
                    <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                      <Icon name="AlertCircle" size={14} />
                      <span>{errors.microsoft}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'manual' && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900 mb-1">
                      {authMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
                    </h4>
                    <p className="text-xs text-blue-700">
                      {authMode === 'signup' 
                        ? 'Enter your college details to join CodeCampus and start your coding journey.'
                        : 'Sign in with your existing credentials to continue learning.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'oauth' && (
              <>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Shield" size={16} className="text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900 mb-1">Secure College Login</h4>
                      <p className="text-xs text-blue-700">
                        We verify your educational institution via your OAuth provider. Use your college account.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="text-sm font-medium text-green-900 mb-2">Supported Institutions:</h4>
                  <div className="text-xs text-green-700 space-y-1">
                    <p>• Universities with .edu domains</p>
                    <p>• International academic institutions (.ac.uk, .ac.in, etc.)</p>
                    <p>• PCCOE Pune and partner colleges</p>
                    <p>• Google Workspace for Education and Azure AD tenants</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">
              By {authMode === 'signup' ? 'creating an account' : 'signing in'}, you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
