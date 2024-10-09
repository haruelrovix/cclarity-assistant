const mockAIResponse = 'Here is your AI generated content.';

export const mockAIService = () => new Promise<string>((resolve) => {
  setTimeout(() => resolve(mockAIResponse), 1000);
});
