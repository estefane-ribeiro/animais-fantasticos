export default function initFetchBitcoin() {
  const valorBitcoin = document.querySelector(".btc-preco");

  async function precoBitcoin() {
    try {
      const btcResponse = await fetch("https://blockchain.info/ticker");
      const btcJson = await btcResponse.json();

      valorBitcoin.textContent = (1000 / btcJson.BRL.buy).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }

  precoBitcoin();
}
