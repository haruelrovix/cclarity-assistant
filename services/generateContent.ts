import Constants from 'expo-constants';

export const generateContent = async (text: string): Promise<any> => {
  const url = `${Constants?.expoConfig?.extra?.EXPO_PUBLIC_API_BASE_URL}/assistant`;
  const apiKey = `${Constants?.expoConfig?.extra?.EXPO_PUBLIC_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({ text })
    });

    const jsonResponse = await response.json();

    if (!response.ok) {
      return { isError: true, ...jsonResponse };
    }

    return jsonResponse;
  } catch (error) {
    console.info('Error making request:', error);
  }
};
