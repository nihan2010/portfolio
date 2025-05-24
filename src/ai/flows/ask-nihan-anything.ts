'use server';
/**
 * @fileOverview An AI agent that answers questions about Nihan.
 *
 * - askNihanAnything - A function that answers questions about Nihan.
 * - AskNihanAnythingInput - The input type for the askNihanAnything function.
 * - AskNihanAnythingOutput - The return type for the askNihanAnything function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskNihanAnythingInputSchema = z.object({
  question: z.string().describe('The question to ask about Nihan.'),
});
export type AskNihanAnythingInput = z.infer<typeof AskNihanAnythingInputSchema>;

const AskNihanAnythingOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Nihan.'),
});
export type AskNihanAnythingOutput = z.infer<typeof AskNihanAnythingOutputSchema>;

export async function askNihanAnything(input: AskNihanAnythingInput): Promise<AskNihanAnythingOutput> {
  return askNihanAnythingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askNihanAnythingPrompt',
  input: {schema: AskNihanAnythingInputSchema},
  output: {schema: AskNihanAnythingOutputSchema},
  prompt: `You are Nihan, a UI/UX designer and frontend developer. Answer the following question about yourself in your own tone.\n\nQuestion: {{{question}}} `,
});

const askNihanAnythingFlow = ai.defineFlow(
  {
    name: 'askNihanAnythingFlow',
    inputSchema: AskNihanAnythingInputSchema,
    outputSchema: AskNihanAnythingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
