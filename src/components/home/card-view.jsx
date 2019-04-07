import React from 'react';
import styled from 'styled-components';
import { BorderButton } from 'components/shared/button';
import { Checkbox } from 'components/shared/checkbox';

const CardWrapper = styled.div`
  display: inline-block;
  margin: 10px;
  border: 1px solid #ccc;

  .content {
    display: flex;
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

const CardImageWrapper = styled.div`
  position: relative;

  .overlay {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff60;
  }

  &:hover .overlay {
    display: flex;
  }
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
      selectedAmount: 0
    };
  }

  render() {
    const { selectedAmount } = this.state;
    const { charity } = this.props;
    return (
      <CardWrapper>
        <div className="content">
          <CardImageWrapper>
            <CardImage src={`/images/${charity.image}`} />
            <div className="overlay">
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
            </div>
          </CardImageWrapper>
          <CardAccessory>
            <div>{charity.name}</div>
            <BorderButton onClick={this.onSend}>Pay</BorderButton>
          </CardAccessory>
        </div>
      </CardWrapper>
    );
  }

  onSend = () => {
    const { selectedAmount } = this.state;
    const { charity, sendPayment } = this.props;

    sendPayment(charity, selectedAmount);
    this.setState({
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
