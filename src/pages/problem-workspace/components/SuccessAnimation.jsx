import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessAnimation = ({ isVisible, onClose, submissionData }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowLeaderboard(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
      setShowLeaderboard(false);
    }
  }, [isVisible]);

  const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ['#10B981', '#F59E0B', '#2563EB', '#DC2626', '#8B5CF6']?.[Math.floor(Math.random() * 5)],
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Confetti Animation */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiParticles?.map((particle) => (
                <motion.div
                  key={particle?.id}
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: particle?.color,
                    width: particle?.size,
                    height: particle?.size,
                    left: `${particle?.x}%`,
                    top: `${particle?.y}%`,
                  }}
                  initial={{ y: -100, rotate: 0, opacity: 1 }}
                  animate={{
                    y: window.innerHeight + 100,
                    rotate: 360,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 3,
                    delay: particle?.delay,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="bg-background rounded-2xl p-8 max-w-md w-full mx-4 text-center relative"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 10, stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="CheckCircle" size={40} className="text-green-600" />
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">
                🎉 Accepted!
              </h2>
              <p className="text-muted-foreground">
                Great job! Your solution has been accepted.
              </p>
            </motion.div>

            {/* Performance Stats */}
            {submissionData && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 mb-6"
              >
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Zap" size={16} className="text-amber-600" />
                    <span className="text-sm font-medium text-muted-foreground">Runtime</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{submissionData?.runtime}ms</p>
                  <p className="text-xs text-green-600">
                    Beats {submissionData?.runtimePercentile}%
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Database" size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-muted-foreground">Memory</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{submissionData?.memory}MB</p>
                  <p className="text-xs text-green-600">
                    Beats {submissionData?.memoryPercentile}%
                  </p>
                </div>
              </motion.div>
            )}

            {/* Leaderboard Update */}
            <AnimatePresence>
              {showLeaderboard && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Trophy" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Leaderboard Update</span>
                  </div>
                  <p className="text-sm text-foreground">
                    You've moved up to <span className="font-bold text-primary">rank #47</span> in your class!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-3"
            >
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Continue Coding
              </Button>
              <Button
                variant="default"
                className="flex-1"
                iconName="Share"
                iconPosition="left"
              >
                Share Solution
              </Button>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground academic-transition"
            >
              <Icon name="X" size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessAnimation;