import React, { useState, useEffect } from 'react';
import { Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import Player from 'react-player';

interface QuestionProps {
  question: string;
  options: string[];
  answer: string;
  audioUrl: string;
  onAnswerSubmit: (selectedOption: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, answer, audioUrl, onAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSubmit(selectedOption);
    }
  };

  useEffect(() => {
    // Reset selected option and timer on question change
    setSelectedOption('');
    setIsPlaying(false);
  }, [question]); // Dependency array

  return (
    <div>
      <h2>{question}</h2>
      <Player url={audioUrl} playing={isPlaying} onPlay={handlePlayPause} onPause={handlePlayPause} controls />
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
      <Button variant="contained" color="primary" disabled={!selectedOption} onClick={handleSubmit}>
        Submit Answer
      </Button>
    </div>
  );
};

export default Question;