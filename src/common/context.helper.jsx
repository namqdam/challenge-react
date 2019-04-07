import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export const mergeContextProviders = contexts => props => {
  const { children, value } = props;

  const child = contexts.reduce((combinedChildren, Context) => {
    return (
      <Context.Provider value={value}>{combinedChildren}</Context.Provider>
    );
  }, React.Children.only(children));
  return child;
};

export const withContext = Context => WrappedComponent => {
  class ComponentWithContext extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {props => <WrappedComponent {...props} {...this.props} />}
        </Context.Consumer>
      );
    }
  }

  hoistNonReactStatics(ComponentWithContext, WrappedComponent);
  return ComponentWithContext;
};
