import { useStore } from '@/store/useStore';
import React from 'react';
import { Text } from 'react-native';

const AIResponse: React.FC = () => {
  const aiResponse = useStore((state) => state.aiResponse);
  return (
    <Text style={{ margin: 10, fontSize: 16 }}>
      {aiResponse}
    </Text>
  );
};

export default AIResponse;
