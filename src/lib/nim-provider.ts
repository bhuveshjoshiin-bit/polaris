import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

import { NIM_BASE_URL } from "./models";

export const nim = createOpenAICompatible({
  name: "nvidia-nim",
  baseURL: NIM_BASE_URL,
  apiKey: process.env.NVIDIA_NIM_API_KEY ?? "",
});

export function nimModel(modelId: string) {
  return nim.chatModel(modelId);
}
