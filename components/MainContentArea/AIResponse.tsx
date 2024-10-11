import { useStore } from '@/store/useStore';
import { Divider, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';


export default function AIResponse() {
  const aiResponse = useStore((state) => state.aiResponse);

  return <View style={styles.container}>{aiResponse.map(item => (
    <View style={styles.wrapper} key={item.timestamp}>
      <Text style={styles.timestamp}>
        {item?.timestamp} | Token count (prompt/generated): {item?.response?.prompt_token_count}/{item?.response?.generation_token_count}
      </Text>
      <Text style={styles.content}>
        {item?.response?.generation}
      </Text>
      <Divider />
    </View>
  ))
  }</View>;
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '90%',
    marginTop: 10,
  },
  wrapper: {
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 11,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});
