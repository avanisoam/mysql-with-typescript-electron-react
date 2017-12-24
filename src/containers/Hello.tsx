// import HelloComponent from '../components/HelloComponent';
// import * as actions from '../actions/';
// import { StoreState } from '../types/States';
// import { connect, Dispatch } from 'react-redux';

// export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
//   return {
//     enthusiasmLevel,
//     name: languageName
//   };
// }

// export function mapDispatchToProps(
//   dispatch: Dispatch<actions.EnthusiasmAction>
// ) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm())
//   };
// }

// //workaround TS4029 by explicitly import types and avoid unused import error
// const connectedComponent = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(HelloComponent);
// export default connectedComponent;
