import { StyleSheet } from 'react-native';
import { Colors } from 'constants/Colors';

export const styles = StyleSheet.create({
  add: {
    borderTopWidth: 1,
    borderColor: Colors.divider,
    display: 'flex',
    flexDirection: 'column',
  },
  addButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: Colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  input: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.divider,
    backgroundColor: Colors.white,
    maxHeight: 96,
    minHeight: 52,
  },
  space: {
    height: 32,
    flexGrow: 1,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.divider,
    height: 32,
    marginLeft: 8,
    marginRight: 8,
  },
  asset: {
    width: 92,
    height: 92,
    marginRight: 8,
    backgroundColor: 'yellow',
  },
  carousel: {
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  editHeader: {
    fontSize: 18,
    paddingBottom: 16,
  },
  editSize: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 2,
  },
  editColor: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 2,
  },
  editControls: {
    display: 'flex',
    flexDirection: 'row',
  },
  editWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  editContainer: {
    backgroundColor: Colors.formBackground,
    padding: 16,
    width: '80%',
    maxWidth: 400,
  },
  option: {
    borderRadius: 8,
    margin: 8,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  optionText: {
    padding: 8,
    color: Colors.primary,
    textAlign: 'center',
  },
  selected: {
    borderRadius: 8,
    margin: 8,
    borderColor: Colors.primary,
    borderWidth: 1,
    backgroundColor: Colors.primary,
  },
  selectedText: {
    padding: 8,
    color: Colors.white,
    textAlign: 'center',
  },
  close: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    width: 72,
    display: 'flex',
    alignItems: 'center',
  },
  selection: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

