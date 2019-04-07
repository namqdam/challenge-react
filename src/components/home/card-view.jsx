import React from 'react';
import styled from 'styled-components';
import { BorderButton, ClearButton } from 'components/shared/button';
import { Checkbox } from 'components/shared/checkbox';
import { Header4 } from 'components/shared/header';

const CardWrapper = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  margin: 0em 1em 1em 1em;

  .content {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-items: stretch;
    height: 25em;
    width: 30em;
  }
`;

const CardAccessory = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
`;

const CardOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
`;

const CardImage = styled.img`
  height: 21em;
  width: 100%;
  object-fit: cover;
`;

export class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      selectedAmount: 0
    };
  }

  render() {
    const { overlay } = this.state;
    const { charity } = this.props;
    return (
      <CardWrapper>
        <div className="content">
          <CardImage src={`/images/${charity.image}`} />
          <CardAccessory>
            <Header4>{charity.name}</Header4>
            <BorderButton onClick={this.switchOverlay}>Donate</BorderButton>
          </CardAccessory>
          {overlay ? this.renderOverlay() : null}
        </div>
      </CardWrapper>
    );
  }

  renderOverlay = () => {
    const { selectedAmount } = this.state;
    const { charity } = this.props;

    return (
      <CardOverlay>
        <div>
          <div>
            <Checkbox
              id={`${charity.id}-10`}
              name={'10'}
              checked={selectedAmount === 10}
              onChange={this.handleInputChange}
            />
            <Checkbox
              id={`${charity.id}-20`}
              name={'20'}
              checked={selectedAmount === 20}
              onChange={this.handleInputChange}
            />
            <Checkbox
              id={`${charity.id}-50`}
              name={'50'}
              checked={selectedAmount === 50}
              onChange={this.handleInputChange}
            />
            <Checkbox
              id={`${charity.id}-100`}
              name={'100'}
              checked={selectedAmount === 100}
              onChange={this.handleInputChange}
            />
            <Checkbox
              id={`${charity.id}-500`}
              name={'500'}
              checked={selectedAmount === 500}
              onChange={this.handleInputChange}
            />
          </div>
          <BorderButton style={{ marginTop: '1.5em' }} onClick={this.onSend}>
            Pay
          </BorderButton>
        </div>
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <ClearButton onClick={this.switchOverlay}>X</ClearButton>
        </div>
      </CardOverlay>
    );
  };

  switchOverlay = () => {
    this.setState((prevState, props) => ({ overlay: !prevState.overlay }));
  };

  onSend = () => {
    const { selectedAmount } = this.state;
    if (!selectedAmount) return;

    const { charity, sendPayment } = this.props;

    sendPayment(charity, selectedAmount);
    this.setState({
      overlay: false,
      selectedAmount: 0
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({
      selectedAmount: Number(name)
    });
  };
}
