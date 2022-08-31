import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { StakeAuthorization } from "cosmjs-types/cosmos/staking/v1beta1/authz";
import { AminoStakeAuthorization } from "./messages";

export function createStakeAuthorizationConverters(): AminoConverters {
  return {
    "/cosmos.bank.v1beta1.StakeAuthorization": {
      aminoType: "cosmos-sdk/StakeAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoStakeAuthorization["value"] => {
        const stakeAuthorization = StakeAuthorization.decode(authorization);
        return {
          max_tokens: stakeAuthorization.maxTokens,
          authorization_type: stakeAuthorization.authorizationType,
          allow_list: stakeAuthorization.allowList,
          deny_list: stakeAuthorization.denyList,
        };
      },
      fromAmino: (
        authorization: AminoStakeAuthorization["value"]
      ): Any["value"] =>
        StakeAuthorization.encode(
          StakeAuthorization.fromPartial({
            maxTokens: authorization.max_tokens,
            authorizationType: authorization.authorization_type,
            allowList: authorization.allow_list,
            denyList: authorization.deny_list,
          })
        ).finish(),
    },
  };
}

export default createStakeAuthorizationConverters;