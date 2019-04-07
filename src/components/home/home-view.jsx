import React from 'react';
import _ from 'lodash';
import { withContext } from 'common/context.helper';
import { AppContext } from 'context/app.context';
import { HomeService } from 'service/home.service';
import { Header24 } from 'components/shared/header';
import { CardView } from './card-view';

class _HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPayment: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.payments !== prevProps.payments) {
      this.calculateTotalPayment();
    }
  }

  componentDidMount() {
    const { updateCharities, updatePayments } = this.props;
    HomeService.listCharities().then(res => {
      updateCharities(res);
    });

    HomeService.listPayments().then(res => {
      updatePayments(res);
    });
  }

  render() {
    const { totalPayment } = this.state;
    const { charities } = this.props;
    return (
      <div>
        <Header24>Omise Tambon React</Header24>
        <p>{`Total donation : ${totalPayment} THB`}</p>
        {charities.map(charity => {
          return (
            <CardView
              key={charity.id}
              charity={charity}
              sendPayment={this.sendPayment}
            />
          );
        })}
      </div>
    );
  }

  sendPayment = (charity, amount) => {
    const { payments, updatePayments } = this.props;
    const { id, currency } = charity;
    HomeService.sendPayment({ id, amount, currency }).then(res => {
      updatePayments([...payments, res]);
    });
  };

  calculateTotalPayment = () => {
    const { payments } = this.props;
    const totalPayment = (payments || []).reduce((total, payment) => {
      const amount = _.get(payment, 'amount');
      if (!_.isNil(amount)) {
        total = total + amount;
      }
      return total;
    }, 0);
    this.setState({ totalPayment });
  };
}

export const HomeView = withContext(AppContext)(_HomeView);
