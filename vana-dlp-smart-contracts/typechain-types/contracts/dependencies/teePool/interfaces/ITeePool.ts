/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace ITeePool {
  export type TeeInfoStruct = {
    teeAddress: AddressLike;
    url: string;
    status: BigNumberish;
    amount: BigNumberish;
    withdrawnAmount: BigNumberish;
    jobsCount: BigNumberish;
    publicKey: string;
  };

  export type TeeInfoStructOutput = [
    teeAddress: string,
    url: string,
    status: bigint,
    amount: bigint,
    withdrawnAmount: bigint,
    jobsCount: bigint,
    publicKey: string
  ] & {
    teeAddress: string;
    url: string;
    status: bigint;
    amount: bigint;
    withdrawnAmount: bigint;
    jobsCount: bigint;
    publicKey: string;
  };

  export type JobStruct = {
    fileId: BigNumberish;
    bidAmount: BigNumberish;
    status: BigNumberish;
    addedTimestamp: BigNumberish;
    ownerAddress: AddressLike;
    teeAddress: AddressLike;
  };

  export type JobStructOutput = [
    fileId: bigint,
    bidAmount: bigint,
    status: bigint,
    addedTimestamp: bigint,
    ownerAddress: string,
    teeAddress: string
  ] & {
    fileId: bigint;
    bidAmount: bigint;
    status: bigint;
    addedTimestamp: bigint;
    ownerAddress: string;
    teeAddress: string;
  };
}

export declare namespace IDataRegistry {
  export type ProofDataStruct = {
    score: BigNumberish;
    dlpId: BigNumberish;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofDataStructOutput = [
    score: bigint,
    dlpId: bigint,
    metadata: string,
    proofUrl: string,
    instruction: string
  ] & {
    score: bigint;
    dlpId: bigint;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofStruct = {
    signature: BytesLike;
    data: IDataRegistry.ProofDataStruct;
  };

  export type ProofStructOutput = [
    signature: string,
    data: IDataRegistry.ProofDataStructOutput
  ] & { signature: string; data: IDataRegistry.ProofDataStructOutput };
}

export interface ITeePoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeTeeList"
      | "activeTeeListAt"
      | "activeTeesCount"
      | "addProof"
      | "addTee"
      | "cancelDelay"
      | "cancelJob"
      | "dataRegistry"
      | "fileJobIds"
      | "isTee"
      | "jobs"
      | "jobsCount"
      | "pause"
      | "removeTee"
      | "requestContributionProof"
      | "submitJob"
      | "teeFee"
      | "teeJobIdsPaginated"
      | "teeList"
      | "teeListAt"
      | "tees"
      | "teesCount"
      | "unpause"
      | "updateCancelDelay"
      | "updateDataRegistry"
      | "updateTeeFee"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeTeeList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeTeeListAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activeTeesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addProof",
    values: [BigNumberish, IDataRegistry.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addTee",
    values: [AddressLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelJob",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dataRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fileJobIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isTee", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "jobs", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "jobsCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTee",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestContributionProof",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitJob",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "teeFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "teeJobIdsPaginated",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "teeList", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "teeListAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tees", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "teesCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCancelDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDataRegistry",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTeeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "activeTeeList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTeeListAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTeesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addTee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancelJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fileJobIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobsCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeTee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestContributionProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "teeJobIdsPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "teeList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teeListAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCancelDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTeeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export interface ITeePool extends BaseContract {
  connect(runner?: ContractRunner | null): ITeePool;
  waitForDeployment(): Promise<this>;

  interface: ITeePoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  activeTeeList: TypedContractMethod<[], [string[]], "view">;

  activeTeeListAt: TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  activeTeesCount: TypedContractMethod<[], [bigint], "view">;

  addProof: TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "payable"
  >;

  addTee: TypedContractMethod<
    [teeAddress: AddressLike, url: string, publicKey: string],
    [void],
    "nonpayable"
  >;

  cancelDelay: TypedContractMethod<[], [bigint], "view">;

  cancelJob: TypedContractMethod<[jobId: BigNumberish], [void], "nonpayable">;

  dataRegistry: TypedContractMethod<[], [string], "view">;

  fileJobIds: TypedContractMethod<[fileId: BigNumberish], [bigint[]], "view">;

  isTee: TypedContractMethod<[teeAddress: AddressLike], [boolean], "view">;

  jobs: TypedContractMethod<
    [jobId: BigNumberish],
    [ITeePool.JobStructOutput],
    "view"
  >;

  jobsCount: TypedContractMethod<[], [bigint], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  removeTee: TypedContractMethod<
    [teeAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  requestContributionProof: TypedContractMethod<
    [fileId: BigNumberish],
    [void],
    "payable"
  >;

  submitJob: TypedContractMethod<[fileId: BigNumberish], [void], "payable">;

  teeFee: TypedContractMethod<[], [bigint], "view">;

  teeJobIdsPaginated: TypedContractMethod<
    [teeAddress: AddressLike, start: BigNumberish, limit: BigNumberish],
    [bigint[]],
    "view"
  >;

  teeList: TypedContractMethod<[], [string[]], "view">;

  teeListAt: TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  tees: TypedContractMethod<
    [teeAddress: AddressLike],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  teesCount: TypedContractMethod<[], [bigint], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateCancelDelay: TypedContractMethod<
    [newCancelDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateDataRegistry: TypedContractMethod<
    [dataRegistry: AddressLike],
    [void],
    "nonpayable"
  >;

  updateTeeFee: TypedContractMethod<
    [newTeeFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activeTeeList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "activeTeeListAt"
  ): TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "activeTeesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addProof"
  ): TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "addTee"
  ): TypedContractMethod<
    [teeAddress: AddressLike, url: string, publicKey: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancelJob"
  ): TypedContractMethod<[jobId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dataRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fileJobIds"
  ): TypedContractMethod<[fileId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "isTee"
  ): TypedContractMethod<[teeAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "jobs"
  ): TypedContractMethod<
    [jobId: BigNumberish],
    [ITeePool.JobStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "jobsCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeTee"
  ): TypedContractMethod<[teeAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestContributionProof"
  ): TypedContractMethod<[fileId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "submitJob"
  ): TypedContractMethod<[fileId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "teeFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "teeJobIdsPaginated"
  ): TypedContractMethod<
    [teeAddress: AddressLike, start: BigNumberish, limit: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "teeList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "teeListAt"
  ): TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "tees"
  ): TypedContractMethod<
    [teeAddress: AddressLike],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "teesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateCancelDelay"
  ): TypedContractMethod<[newCancelDelay: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateDataRegistry"
  ): TypedContractMethod<[dataRegistry: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTeeFee"
  ): TypedContractMethod<[newTeeFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
