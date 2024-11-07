/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MulticallUpgradeable,
  MulticallUpgradeableInterface,
} from "../../../../@openzeppelin/contracts-upgradeable/utils/MulticallUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MulticallUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): MulticallUpgradeableInterface {
    return new Interface(_abi) as MulticallUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MulticallUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MulticallUpgradeable;
  }
}