import {
    ArrowPathIcon,
    ExclamationTriangleIcon,
    HomeIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // 에러 로깅 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '#header';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full"
          >
            {/* Error Card */}
            <div className="glass p-8 rounded-2xl text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <ExclamationTriangleIcon className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-3xl font-bold text-white mb-4">
                앗! 문제가 발생했습니다
              </h1>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                포트폴리오를 불러오는 중 예상치 못한 오류가 발생했습니다. 
                페이지를 새로고침하거나 홈으로 돌아가 보세요.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.3 }}
                  className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left"
                >
                  <h3 className="text-red-300 font-semibold mb-2 text-sm">
                    개발자 정보 (프로덕션에서는 표시되지 않음):
                  </h3>
                  <div className="text-red-200 text-xs font-mono break-all">
                    {this.state.error.toString()}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={this.handleReload}
                  className="btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                    페이지 새로고침
                  </span>
                </motion.button>

                <motion.button
                  onClick={this.handleGoHome}
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <HomeIcon className="w-5 h-5" />
                    홈으로 돌아가기
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-gray-400 text-sm mb-2">
                문제가 계속 발생하시나요?
              </p>
              <a
                href="mailto:dlwjdtn535@naver.com"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm underline"
              >
                개발자에게 문의하기
              </a>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 