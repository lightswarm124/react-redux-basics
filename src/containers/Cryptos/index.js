import React, { Component } from "react";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

class Cryptos extends Component {
  state = {
    cryptoList: [],
    cryptos: [],
    cryptoName: "",
    isFetching: false
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch(`https://api.coinmarketcap.com/v2/listings/`)
      .then((res) => res.json())
      .then((json) => this.setState({ cryptoList: json, isFetching: false }))
  }

  onCryptoInputChange = (e) => {
    this.setState({ cryptoName: e.target.value, isFetching: true });
    fetch(`https://api.coinmarketcap.com/v2/listings/`)
      .then(console.log(this.state.cryptoList))
    //this.setState({ cryptos: json, isFetching: false
  }

  render() {
    const { cryptos, cryptoName, isFetching } = this.state;

    return(
      <div>
        <Intro message="Crypto Prices" />
        <div>
          <input
            type="text"
            value={cryptoName}
            onChange={this.onCryptoInputChange} />
        </div>
        {
          !isFetching && cryptos.length === 0 && cryptoName.trim() === ""
          &&
          <p>Please enter series name into the input</p>
        }
        {
          !isFetching && cryptos.length === 0 && cryptoName.trim() !== ""
          &&
          <p>No Cryptocurrency hass been found with this name</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <ul>{this.state.cryptos.data}</ul>
        }
      </div>
    );
  }
}

export default Cryptos;
