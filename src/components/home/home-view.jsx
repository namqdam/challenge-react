import React from 'react';
import _ from 'lodash';
import { withContext } from 'common/context.helper';
import { CardView } from 'components/home/card-view';
import { Header1 } from 'components/shared/header';
import { SnackBar } from 'components/shared/snackbar';
import { AppContext } from 'context/app.context';
import { HomeService } from 'service/home.service';

class _HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPayment: 0,
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
    const { lastPayment, totalPayment } = this.state;
    const { charities } = this.props;

    return (
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <Header1>React Challenge</Header1>
        <p
          style={{ marginTop: '16px', marginBottom: '24px' }}
        >{`Total donation : ${totalPayment} THB`}</p>
        <div>
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
        <SnackBar
          visible={this.state.lastPayment > 0}
        >{`Thanks for donate ${lastPayment} THB`}</SnackBar>
      </div>
    );
  }

  sendPayment = (charity, amount) => {
    const { payments, updatePayments } = this.props;
    const { id, currency } = charity;
    HomeService.sendPayment({ id, amount, currency }).then(res => {
      updatePayments([...payments, res]);

      this.setState({ lastPayment: amount }, () => {
        setTimeout(() => {
          this.setState({ lastPayment: 0 });
        }, 3000);
      });
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
