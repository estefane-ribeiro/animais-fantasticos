export default function fetchBitcoin(preco, url) {
  const valorBitcoin = document.querySelector(preco);

  async function precoBitcoin() {
    try {
      const btcResponse = await fetch(url);
      const btcJson = await btcResponse.json();

      valorBitcoin.textContent = (1000 / btcJson.BRL.buy).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }

  return precoBitcoin();
}
