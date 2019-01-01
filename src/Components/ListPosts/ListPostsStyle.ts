import { StyleSheet, TextStyle } from 'react-native'

interface Style {
  containerAvatar: TextStyle
  generalContainer: TextStyle
  dateText: TextStyle
  username: TextStyle
  width100Percent: TextStyle
  containerBody: TextStyle
  markdownContainer: TextStyle
}

const styles = StyleSheet.create<Style>({
  generalContainer: {
    flexDirection: 'row'
  },
  width100Percent: {
    width: '100%',
    flexDirection: 'row'
  },
  username: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
  dateText: {
    fontSize: 12,
    color: 'gray'
  },
  markdownContainer: {
    marginTop: 10
  },
  containerAvatar: {
    marginTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 50
  },
  containerBody: {
    flex: 1,
    width: '100%',
    marginLeft: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default styles
