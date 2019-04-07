import { get, post } from 'resource/fetch';

async function listCharities() {
  return get('http://localhost:3001/charities');
}

async function listPayments() {
  return get('http://localhost:3001/payments');
}

async function sendPayment({ id, amount, currency }) {
  return post('http://localhost:3001/payments', {
    charitiesId: id,
    amount: amount,
    currency: currency
  });
}

export const HomeService = {
  listCharities,
  listPayments,
  sendPayment
};
