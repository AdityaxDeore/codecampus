import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Function to validate if email domain is educational
  const isEducationalDomain = (email) => {
    const domain = email.toLowerCase();
    console.log('Checking domain:', domain); // Debug log
    
    // Specific check for PCCOE
    if (domain.includes('pccoepune.org')) {
      console.log('PCCOE domain detected'); // Debug log
      return true;
    }
    
    // List of known educational domain patterns
    const educationalPatterns = [
      // US and international educational domains
      /\.edu$/,           // US educational institutions
      /\.edu\./,          // US educational subdomains
      /\.ac\./,           // Academic institutions worldwide (.ac.uk, .ac.in, etc.)
      
      // Specific known educational institutions
      /mit\.edu/,
      /stanford\.edu/,
      /harvard\.edu/,
      /berkeley\.edu/,
      /cmu\.edu/,
      /caltech\.edu/,
      
      // Indian institutions
      /\.ac\.in$/,
      /iit.*\.ac\.in/,
      /nit.*\.ac\.in/,
      /iisc\.ac\.in/,
    ];
    
    // Check against known patterns
    const isKnownEducational = educationalPatterns.some(pattern => {
      const match = pattern.test(domain);
      if (match) console.log('Pattern matched:', pattern); // Debug log
      return match;
    });
    
    // Additional check for common educational keywords in domain
    const hasEducationalKeywords = /college|university|institute|school|academy|campus/.test(domain);
    if (hasEducationalKeywords) console.log('Educational keywords found'); // Debug log
    
    // Exclude common personal email providers (but allow them if they have .edu)
    const personalProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com'];
    const isPersonalProvider = personalProviders.some(provider => domain.includes(provider));
    
    if (isPersonalProvider && !domain.includes('.edu')) {
      console.log('Rejected personal provider:', domain); // Debug log
      return false;
    }
    
    const result = isKnownEducational || hasEducationalKeywords;
    console.log('Final validation result:', result); // Debug log
    return result;
  };

  // Google OAuth login simulation
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      // In a real implementation, this would use Google OAuth API
      // For now, we'll simulate the OAuth flow
      
      // Simulate OAuth popup and user selection
      const mockGoogleResponse = await simulateGoogleOAuth();
      
      if (mockGoogleResponse.error) {
        setErrors({ google: mockGoogleResponse.error });
        return;
      }

      const { email, name, picture } = mockGoogleResponse;

      // Validate if it's an educational email
      console.log('Validating email:', email); // Debug log
      
      if (!isEducationalDomain(email)) {
        console.log('Email validation failed for:', email); // Debug log
        setErrors({ 
          google: 'Please use your college or university email address. Personal Gmail accounts are not allowed.' 
        });
        return;
      }
      
      console.log('Email validation passed for:', email); // Debug log

      // Store user session
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPicture', picture);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'google');
      
      // Navigate to dashboard
      navigate('/student-dashboard');
      
    } catch (error) {
      setErrors({ google: 'Google login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Simulate Google OAuth response (replace with actual Google OAuth in production)
  const simulateGoogleOAuth = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo, always return the PCCOE email to test
        resolve({
          email: 'aditya.deore24@pccoepune.org',
          name: 'Aditya Deore',
          picture: 'https://via.placeholder.com/100'
        });
      }, 1500);
    });
  };

  // Microsoft OAuth (for institutions using Office 365)
  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      // Similar to Google OAuth but for Microsoft
      const mockMicrosoftResponse = await simulateMicrosoftOAuth();
      
      if (mockMicrosoftResponse.error) {
        setErrors({ microsoft: mockMicrosoftResponse.error });
        return;
      }

      const { email, name, picture } = mockMicrosoftResponse;

      // Validate if it's an educational email
      if (!isEducationalDomain(email)) {
        setErrors({ 
          microsoft: 'Please use your college or university email address.' 
        });
        return;
      }

      // Store user session
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPicture', picture);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'microsoft');
      
      // Navigate to dashboard
      navigate('/student-dashboard');
      
    } catch (error) {
      setErrors({ microsoft: 'Microsoft login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const simulateMicrosoftOAuth = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email: 'student@university.edu',
          name: 'Jane Doe',
          picture: 'https://via.placeholder.com/100'
        });
      }, 1500);
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - CodeCampus</title>
        <meta name="description" content="Login to CodeCampus with your college email address" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative w-full max-w-md mx-4">
          {/* Logo Section */}
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
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M8 12L16 8L24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16L16 14L20 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">CodeCampus</h1>
              </div>
            </a>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in with your college account</p>
          </div>

          {/* Login Options */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="space-y-4">
              {/* Google Login */}
              <div>
                <Button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-center space-x-3 py-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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

              {/* Microsoft Login */}
              <div>
                <Button
                  onClick={handleMicrosoftLogin}
                  disabled={isLoading}
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-center space-x-3 py-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
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

            {/* Security Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Shield" size={16} className="text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900 mb-1">Secure College Login</h4>
                  <p className="text-xs text-blue-700">
                    We automatically verify your educational institution through your email domain. 
                    Only students from recognized colleges and universities can access CodeCampus.
                  </p>
                </div>
              </div>
            </div>

            {/* Supported Institutions */}
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="text-sm font-medium text-green-900 mb-2">Supported Institutions:</h4>
              <div className="text-xs text-green-700 space-y-1">
                <p>• Universities with .edu domains</p>
                <p>• International academic institutions (.ac.uk, .ac.in, etc.)</p>
                <p>• IITs, NITs, and other Indian institutes</p>
                <p>• PCCOE Pune and partner colleges</p>
                <p>• Any institution using Google Workspace for Education</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
