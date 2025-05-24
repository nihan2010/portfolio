// src/ai/flows/portfolio-item-summarization.ts
'use server';

/**
 * @fileOverview A flow for summarizing a portfolio item using an AI model.
 *
 * - summarizePortfolioItem - A function that summarizes a portfolio item.
 * - SummarizePortfolioItemInput - The input type for the summarizePortfolioItem function.
 * - SummarizePortfolioItemOutput - The return type for the summarizePortfolioItem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePortfolioItemInputSchema = z.object({
  portfolioItemDescription: z
    .string()
    .describe('The description of the portfolio item to be summarized.'),
});
export type SummarizePortfolioItemInput = z.infer<
  typeof SummarizePortfolioItemInputSchema
>;

const SummarizePortfolioItemOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the portfolio item.'),
});
export type SummarizePortfolioItemOutput = z.infer<
  typeof SummarizePortfolioItemOutputSchema
>;

export async function summarizePortfolioItem(
  input: SummarizePortfolioItemInput
): Promise<SummarizePortfolioItemOutput> {
  return summarizePortfolioItemFlow(input);
}

const summarizePortfolioItemPrompt = ai.definePrompt({
  name: 'summarizePortfolioItemPrompt',
  input: {schema: SummarizePortfolioItemInputSchema},
  output: {schema: SummarizePortfolioItemOutputSchema},
  prompt: `You are Nihan, a UI/UX designer and frontend developer.  A visitor to your portfolio has asked for a summary of one of your projects.  Provide a concise summary of the following project description, highlighting its key features and purpose.  Respond in the first person, as if you were Nihan describing your own work. Project Description: {{{portfolioItemDescription}}}`,
});

const summarizePortfolioItemFlow = ai.defineFlow(
  {
    name: 'summarizePortfolioItemFlow',
    inputSchema: SummarizePortfolioItemInputSchema,
    outputSchema: SummarizePortfolioItemOutputSchema,
  },
  async input => {
    const {output} = await summarizePortfolioItemPrompt(input);
    return output!;
  }
);
