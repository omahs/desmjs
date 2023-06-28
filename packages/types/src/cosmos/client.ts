/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmosAuthzV1beta1TxRegistry from "./authz/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./upgrade/v1beta1/tx.registry";
import * as cosmosAuthzV1beta1TxAmino from "./authz/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "./gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./gov/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "./upgrade/v1beta1/tx.amino";
export const cosmosAminoConverters = {
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
};
export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmosAuthzV1beta1TxRegistry.registry,
  ...cosmosGovV1TxRegistry.registry,
  ...cosmosGovV1beta1TxRegistry.registry,
  ...cosmosUpgradeV1beta1TxRegistry.registry,
];
export const getSigningCosmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    }
  );
  return client;
};