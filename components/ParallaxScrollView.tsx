import { useState, type PropsWithChildren, type ReactElement } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, useColorScheme, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useStore } from '@/store/useStore';
import { Icon, Switch } from '@rneui/themed';
import { Misc } from '@/constants/Misc';

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? Misc.theme.light;
  const [checked, setChecked] = useState<boolean>(false);
  const toggleTheme = useStore((state) => state.toggleTheme);

  const toggleSwitch = () => {
    setChecked(!checked);
    toggleTheme(checked ? Misc.theme.light : Misc.theme.dark);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
          ]}>
          {headerImage}
          <View style={styles.toggleContainer}>
            <Icon name={Misc.icon.light} style={styles.icon} />
            <Switch
              value={checked}
              onValueChange={toggleSwitch}
              style={styles.switch}
            />
            <Icon name={Misc.icon.dark} style={styles.icon} />
          </View>
        </Animated.View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, 
  },
  header: {
    overflow: 'hidden',
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
  },
  icon: {
    marginRight: 3,
  },
  switch: {
    marginHorizontal: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    position: 'absolute', 
    right: 0, 
    bottom: Platform.OS === 'android' ? -5 : 5,
    maxWidth: 300,
  }
});
