import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
    textAlign: 'justify'
  },
  info: {
    flex: 1,
    marginTop: 15,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  author: {
    flex: 1,
    marginTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 50
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13
  },
  name: {
    fontWeight: 'bold'
  }
});