import { AminoConverter } from "@cosmjs/stargate";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { AminoMsgAuthenticate } from "./messages";

export const desmjsTypes: Record<string, AminoConverter> = {
  "/desmjs.v1.MsgAuthenticate": {
    aminoType: "desmjs/MsgAuthenticate",
    toAmino: (value: MsgAuthenticate): AminoMsgAuthenticate["value"] => {
      return {
        user: value.user,
        nonce: value.nonce,
      };
    },
    fromAmino: (msg: AminoMsgAuthenticate["value"]): MsgAuthenticate => {
      return {
        user: msg.user,
        nonce: msg.nonce,
      };
    },
  },
};

export default desmjsTypes;