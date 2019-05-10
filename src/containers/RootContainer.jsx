import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/test';
import { Root } from '../components/Root';

const RootContainer = props => <Root {...props} />;

RootContainer.displayName = 'RootContainer';

const mapStateToProps = ({ test }) => ({
  title: test.title
});

const mapDispatchToProps = dispatch => ({
  changeText: title => dispatch(changeText(title))
});

const EnchancedRootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export {
  RootContainer,
  EnchancedRootContainer
};
