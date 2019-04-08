import React, { useState } from 'react';

export const AppContext = React.createContext({
  charities: [],
  payments: []
});

export function AppContextStore({ children }) {
  const [charities, setCharities] = useState([]);
  const [payments, setPayments] = useState([]);

  function updateCharities(charities) {
    setCharities(charities);
  }

  function updatePayments(payments) {
    setPayments(payments);
  }

  return (
    <AppContext.Provider
      value={{
        charities,
        payments,
        updateCharities,
        updatePayments
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
