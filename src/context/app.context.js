import React from 'react';

export const AppContext = React.createContext({
  charities: [],
  payments: []
});

export class AppContextStore extends React.Component {
  state = {
    charities: [],
    payments: []
  };

  render() {
    const { charities, payments } = this.state;
    return (
      <AppContext.Provider
        value={{
          charities,
          payments,
          updateCharities: charities => {
            this.setState({ charities });
          },
          updatePayments: payments => {
            this.setState({ payments });
          }
          // addEventListener: (event, func) => {
          //   this.eventListeners[event] = {
          //     ...this.eventListeners,
          //     [event]: [...this.eventListeners[event], func]
          //   };
          //   return this.eventListeners[event].length - 1;
          // },
          // removeEventListener: (event, index) => {}
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
