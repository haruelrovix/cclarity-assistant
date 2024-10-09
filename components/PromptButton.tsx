import { Button } from '@rneui/themed';
import { useStore } from '@/store/useStore';
import React from 'react';

interface PromptButtonProps {
  prompt: {
    icon: string;
    title: string;
    content: string;
  }
}

const PromptButton: React.FC<PromptButtonProps> = ({ prompt }) => {
  const { title, icon, content } = prompt;
  const setInputText = useStore((state) => state.setInputText);

  return (
    <Button
      title={title}
      onPress={() => setInputText(content)}
      icon={{
        name: icon,
        size: 15,
      }}
      type='outline'
    buttonStyle={{
      borderColor: '#86939E',
      borderWidth: 1,
      borderRadius: 13,
      margin: 5,
    }}
    containerStyle={{ width: 300 }}
    titleStyle={{ color: '#86939E', fontWeight: 'semibold' }}
    />
  );
};

export default PromptButton;
