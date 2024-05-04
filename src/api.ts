import * as data from './data/questions.json';
interface QuestionData {
    question: string;
    options: string[];
    answer: string;
    audioUrl: string;
  }
  
  // Replace fs with a browser-friendly alternative (e.g., fetch API)
  async function fetchQuestions(): Promise<QuestionData[]> {
  
    try {
      return data as QuestionData[];
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error; // Or re-throw for further handling
    }
  }

export default fetchQuestions;