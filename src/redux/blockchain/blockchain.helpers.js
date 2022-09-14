import { DeFiWeb3Connector } from "deficonnect";

export const getProvider = (wallet) => {
  if (wallet == "cronos") return cronosWallet;
  return metamaskWallet;
};

const metamaskWallet = () => {
  let provider = null;
  const { ethereum } = window;
  if (ethereum) {
    provider = ethereum;
  }
  return provider;
};

const cronosWallet = async () => {
  try {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25, 56, 3, 1],
      rpc: {
        25: "https://evm-cronos.crypto.org",
        56: "https://bsc-dataseed1.binance.org",
        3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        1: "https://mainnet.infura.io/v3/20e078e98de64af88b26c6b1bb47f822",
      },
      pollingInterval: 15000,
    });

    await connector.activate();
    const provider = await connector.getProvider();
    return provider;
  } catch (err) {
    return null;
  }
};
