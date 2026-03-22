
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Note: Ensure GOOGLE_GENAI_API_KEY is set in your environment variables.
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY || 'PLACEHOLDER_KEY',
    })
  ],
  model: 'googleai/gemini-2.5-flash',
});
