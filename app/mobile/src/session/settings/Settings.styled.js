import { StyleSheet } from 'react-native';
import { Colors } from 'constants/Colors';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: Colors.screenBase,
  },
  label: {
    color: Colors.labelText,
    padding: 4,
    fontFamily: 'Roboto',
  },
  radio: {
    marginLeft: 34,
    display: 'flex',
    flexDirection: 'row',
  },
  dismissButton: {
    padding: 12,
  },
  idleRadioCircle: {
    borderWidth: 1,
    borderColor: Colors.activeBorder,
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  activeRadioCircle: {
    borderWidth: 1,
    borderColor: Colors.activeBorder,
    backgroundColor: Colors.activeFill,
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  radioLabel: {
    color: Colors.linkText,
    paddingLeft: 8,
    fontFamily: 'Roboto',
  },
  group: {
    backgroundColor: Colors.areaBase,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.screenBase,
  },
  entry: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    height: 40,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
  option: {
    flex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionControl: {
    flex: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  control: {
    flex: 4,
    display: 'flex',
  },
  labelText: {
    fontSize: 14,
    paddingRight: 8,
    color: Colors.descriptionText,
    fontFamily: 'Roboto',
  },
  optionText: {
    fontSize: 16,
    paddingRight: 8,
    color: Colors.text,
    fontFamily: 'Roboto',
  },
  optionLink: {
    fontSize: 16,
    paddingRight: 8,
    color: Colors.linkText,
    fontFamily: 'Roboto',
  },
  dangerLink: {
    fontSize: 16,
    paddingRight: 8,
    color: Colors.dangerText,
    fontFamily: 'Roboto',
  },
  track: {
    false: Colors.idleFill,
    true: Colors.activeFill,
  },
  notifications: {
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
  },

  modalOverlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.modalBase,
    width: '80%',
    maxWidth: 400,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
  },
  modalHeader: {
    fontSize: 18,
    paddingTop: 16,
    color: Colors.labelText,
    fontFamily: 'Roboto',
  },
  modalClose: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  modalBusy: {
  },
  modalDescription: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.descriptionText,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  delayMessage: {
    fontSize: 12,
    color: Colors.descriptionText,
    paddingBottom: 16,
  },
  modalInput: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modeText: {
    fontSize: 14,
    paddingBottom: 16,
    color: Colors.linkText,
    fontFamily: 'Roboto',
  },
  dangerText: {
    fontSize: 14,
    paddingBottom: 16,
    color: Colors.dangerText,
    fontFamily: 'Roboto',
  },
  inputText: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    margin: 4,
    backgroundColor: Colors.inputBase,
    color: Colors.inputText,
  },
  inputVisibility: {
    position: 'absolute',
    right: 16,
  },
  enabledButton: {
    marginTop: 8,
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: Colors.primaryButton,
  },
  enabledButtonText: {
    color: Colors.primaryButtonText,
    fontFamily: 'Roboto',
  },
  disabledButton: {
    marginTop: 8,
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: Colors.disabledButton,
  },
  disabledButtonText: {
    color: Colors.disabledButtonText,
    fontFamily: 'Roboto',
  },
  dangerButton: {
    marginTop: 8,
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: Colors.dangerButton,
  },
  dangerButtonText: {
    color: Colors.dangerButtonText,
    fontFamily: 'Roboto',
  },
  closeButton: {
    marginTop: 8,
    marginBottom: 16,
    marginRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cancelButton,
    backgroundColor: Colors.closeButton,
  },
  closeButtonText: {
    color: Colors.closeButtonText,
    fontFamily: 'Roboto',
  },
  cancelButton: {
    marginTop: 8,
    marginBottom: 16,
    marginRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: Colors.cancelButton,
  },
  cancelButtonText: {
    color: Colors.cancelButtonText,
    fontFamily: 'Roboto',
  },
  promptButton: {
    marginTop: 8,
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: Colors.primaryButton,
  },
  hintButtons: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 8,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
  floatingInput: {
    color: Colors.inputText,
    paddingTop: 12,
  },
  floatingLabel: {
    color: Colors.text,
  },
  floatingCustomLabel: {
    colorFocused: Colors.inputPlaceholder,
    colorBlurred: Colors.inputPlaceholder,
    fontSizeFocused: 12,
    paddingTop: 4,
  },
  floatingContainer: {
    paddingHorizontal: 12,
    backgroundColor: Colors.inputBase,
    borderRadius: 8,
    height: 52,
  },
  availableStatus: {
    height: 18,
  },
  notAvailable: {
    color: Colors.dangerText,
  },
  rightButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  modalList: {
    width: '100%',
    minHeight: 128,
    maxHeight: 256,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 8,
    borderColor: Colors.horizontalDivider,
    display: 'flex'
  },
  item: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    paddingLeft: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.itemDivider,
  },
  detail: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
  },
  name: {
    color: Colors.text,
    fontSize: 14,
  },
  handle: {
    color: Colors.text,
    fontSize: 12,
  },

});

