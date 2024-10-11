import { lg, sm } from '@/services/utils';
import { useStore } from '@/store/useStore';
import { Button, Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';

interface PromptButtonProps {
  prompt: {
    icon: string;
    title: string;
    content: string;
  },
  width: number
}

export default function PromptButton({ prompt, width }: PromptButtonProps) {
  const { title, icon, content } = prompt;
  const setInputText = useStore((state) => state.setInputText);

  return (
    <Button
      title={title}
      onPress={() => setInputText(content)}
      icon={<Icon
        name={icon}
        size={15}
        style={{ marginRight: 3 }}
      />}
      type='outline'
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      containerStyle={[{ width: lg({ width }) ? 300 : sm({ width }) ? 250 : 200 }, styles.containerStyle ]}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: '#86939E',
    borderWidth: 1,
    borderRadius: 13,
    margin: 5,
  },
  titleStyle: {
    color: '#86939E',
    fontSize: 15,
    fontWeight: 'semibold',
  },
  containerStyle: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  }
});
