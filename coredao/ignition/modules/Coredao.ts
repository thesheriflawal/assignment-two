// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Coredao = buildModule("Coredao", (m) => {
  const coredao = m.contract("Coredao");

  return { coredao };
});

export default Coredao;
