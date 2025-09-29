'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Card } from '@/components/ui';

interface TailoredCV {
  summary: string;
  experiences: Array<{
    title: string;
    company: string;
    newDescription: string;
  }>;
}

const AICVGenerator: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [tailoredCV, setTailoredCV] = useState<TailoredCV | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!jobDescription.trim()) {
      setError('Please enter a job description');
      return;
    }

    setIsGenerating(true);
    setError('');
    setTailoredCV(null);

    try {
      const response = await fetch('/api/tailor-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobDescription }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate tailored CV');
      }

      const data = await response.json();
      setTailoredCV(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="ai-cv-generator" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🤖 AI-Powered CV Tailoring
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Paste any job description and let AI customize your CV to perfectly match the requirements. 
            Get tailored summaries and experience descriptions in seconds!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Enter Job Description
              </h3>
              
              <div className="space-y-6">
                <Input
                  label="Job Description"
                  type="textarea"
                  value={jobDescription}
                  onChange={setJobDescription}
                  placeholder="Paste the job description here... (e.g., We are looking for a React Native developer with 3+ years of experience...)"
                  rows={8}
                  required
                />

                {error && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !jobDescription.trim()}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </div>
                  ) : (
                    'Generate Tailored CV'
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Tailored CV Output
              </h3>

              {!tailoredCV ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter a job description to see your tailored CV here
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Summary */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Professional Summary
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {tailoredCV.summary}
                      </p>
                      <Button
                        onClick={() => copyToClipboard(tailoredCV.summary)}
                        variant="outline"
                        size="sm"
                        className="mt-3"
                      >
                        Copy Summary
                      </Button>
                    </div>
                  </div>

                  {/* Experiences */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tailored Experience Descriptions
                    </h4>
                    <div className="space-y-4">
                      {tailoredCV.experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {exp.title} at {exp.company}
                          </h5>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            {exp.newDescription}
                          </p>
                          <Button
                            onClick={() => copyToClipboard(`${exp.title} at ${exp.company}\n\n${exp.newDescription}`)}
                            variant="outline"
                            size="sm"
                          >
                            Copy Description
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Copy All Button */}
                  <Button
                    onClick={() => {
                      const fullCV = `PROFESSIONAL SUMMARY\n\n${tailoredCV.summary}\n\n\nEXPERIENCE\n\n${tailoredCV.experiences.map(exp => `${exp.title} at ${exp.company}\n\n${exp.newDescription}`).join('\n\n')}`;
                      copyToClipboard(fullCV);
                    }}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Copy Full Tailored CV
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Instant Results
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get tailored CV content in seconds, not hours
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Keyword Optimized
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI matches your experience to job requirements
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Simply paste job description and get results
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICVGenerator;
