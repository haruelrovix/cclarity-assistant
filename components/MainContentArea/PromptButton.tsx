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

export default function PromptButton(buttonProps: PromptButtonProps) {
  const { title, icon, content } = buttonProps.prompt;
  const setInputText = useStore((state) => state.setInputText);

  const payload = { width: buttonProps.width };
  const width = lg(payload) ? 300 : sm(payload) ? 250 : 200;

  const onPress = () => setInputText(content);

  return (
    <Button
      title={title}
      onPress={onPress}
      icon={<Icon
        name={icon}
        size={15}
        style={styles.icon}
      />}
      type='outline'
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      containerStyle={[{ width }, styles.containerStyle]}
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
  },
  icon: {
    marginRight: 3,
  }
});
