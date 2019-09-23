import { StyleSheet } from 'react-native';
import Colors from '~/Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: Colors.lightgray,
  },
  headerText: {
    fontSize: 17,
  },
});

export default styles;
