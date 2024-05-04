import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Button, TextField } from '@material-ui/core';

interface Question {
  question: string;
  options: string[];
  answer: string;
  audioUrl: string;
}

const QuestionEditor: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState<Question>({
    question: '',
    options: ['', '', '', ''],
    answer: '',
    audioUrl: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = [...newQuestion.options];
    newOptions[index] = event.target.value;
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement logic to save the new question data (e.g., store in JSON or API)
    console.log('New Question:', newQuestion); // Replace with actual storage logic
    setNewQuestion({
      question: '',
      options: ['', '', '', ''],
      answer: '',
      audioUrl: '',
    });
  };

  return (
    <div>
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Question" name="question" value={newQuestion.question} onChange={handleInputChange} fullWidth margin="normal" />
        <TextField label="Option 1" name="options" value={newQuestion.options[0]} onChange={(e: ChangeEvent<HTMLInputElement>) => handleOptionChange(0, e)} fullWidth margin="normal" />
        <TextField label="Option 2" name="options" value={newQuestion.options[1]} onChange={(e: ChangeEvent<HTMLInputElement>) => handleOptionChange(1, e)} fullWidth margin="normal" />
        <TextField label="Option 3" name="options" value={newQuestion.options[2]} onChange={(e: ChangeEvent<HTMLInputElement>) => handleOptionChange(2, e)} fullWidth margin="normal" />
        <TextField label="Option 4" name="options" value={newQuestion.options[3]} onChange={(e: ChangeEvent<HTMLInputElement>) => handleOptionChange(3, e)} fullWidth margin="normal" />
        <TextField label="Answer" name="answer" value={newQuestion.answer} onChange={handleInputChange} fullWidth margin="normal" />
        <TextField label="Audio URL" name="audioUrl" value={newQuestion.audioUrl} onChange={handleInputChange} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Save Question
        </Button>
      </form>
    </div>
  );
};

export default QuestionEditor;
