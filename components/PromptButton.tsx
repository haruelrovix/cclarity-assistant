import { useStore } from '@/store/useStore';
import React from 'react';
import { Button } from 'react-native-elements';

interface PromptButtonProps {
  prompt: string;
}

const PromptButton: React.FC<PromptButtonProps> = ({ prompt }) => {
  const setPrompt = useStore((state) => state.setPrompt);
  return (
    <Button
      title={prompt}
      onPress={() => setPrompt(prompt)}
      containerStyle={{ margin: 5, width: '45%' }}
      buttonStyle={{
        backgroundColor: '#007BFF',
        borderRadius: 5,
      }}
    />
  );
};

export default PromptButton;
