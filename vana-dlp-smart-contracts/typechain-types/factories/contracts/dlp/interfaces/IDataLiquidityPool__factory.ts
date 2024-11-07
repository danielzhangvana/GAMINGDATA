/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDataLiquidityPool,
  IDataLiquidityPoolInterface,
} from "../../../../contracts/dlp/interfaces/IDataLiquidityPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "contributorsRewardAmount",
        type: "uint256",
      },
    ],
    name: "addRewardsForContributors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contributorAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "contributorFiles",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fileId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proofIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IDataLiquidityPool.FileResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contributorAddress",
        type: "address",
      },
    ],
    name: "contributorInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contributorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "filesListCount",
            type: "uint256",
          },
        ],
        internalType: "struct IDataLiquidityPool.ContributorInfoResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "contributors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contributorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "filesListCount",
            type: "uint256",
          },
        ],
        internalType: "struct IDataLiquidityPool.ContributorInfoResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contributorsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dataRegistry",
    outputs: [
      {
        internalType: "contract IDataRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fileRewardFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
    ],
    name: "files",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fileId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proofIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IDataLiquidityPool.FileResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "filesListAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "filesListCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterKey",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proofInstruction",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "registryFileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proofIndex",
        type: "uint256",
      },
    ],
    name: "requestReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "teePool",
    outputs: [
      {
        internalType: "contract ITeePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalContributorsRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFileRewardFactor",
        type: "uint256",
      },
    ],
    name: "updateFileRewardFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newProofInstruction",
        type: "string",
      },
    ],
    name: "updateMasterKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newProofInstruction",
        type: "string",
      },
    ],
    name: "updateProofInstruction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTeePool",
        type: "address",
      },
    ],
    name: "updateTeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IDataLiquidityPool__factory {
  static readonly abi = _abi;
  static createInterface(): IDataLiquidityPoolInterface {
    return new Interface(_abi) as IDataLiquidityPoolInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDataLiquidityPool {
    return new Contract(address, _abi, runner) as unknown as IDataLiquidityPool;
  }
}