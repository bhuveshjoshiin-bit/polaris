export interface NIMModel {
  id: string;
  name: string;
  description: string;
  contextLength: number;
}

export const NIM_MODELS: NIMModel[] = [
  {
    id: "deepseek-ai/deepseek-r1",
    name: "DeepSeek R1",
    description: "Advanced reasoning model for complex coding tasks",
    contextLength: 128000,
  },
  {
    id: "meta/llama-3.3-70b-instruct",
    name: "Llama 3.3 70B",
    description: "Meta's versatile instruct model for general coding",
    contextLength: 128000,
  },
  {
    id: "mistralai/mistral-nemo-12b-instruct",
    name: "Mistral NeMo 12B",
    description: "Fast and efficient model for quick responses",
    contextLength: 128000,
  },
  {
    id: "qwen/qwen2.5-coder-32b-instruct",
    name: "Qwen 2.5 Coder 32B",
    description: "Specialized coding model with strong code generation",
    contextLength: 32768,
  },
  {
    id: "deepseek-ai/deepseek-v3",
    name: "DeepSeek V3",
    description: "Latest DeepSeek model with improved reasoning",
    contextLength: 128000,
  },
  {
    id: "nvidia/llama-3.1-nemotron-70b-instruct",
    name: "Nemotron 70B",
    description: "NVIDIA-tuned Llama model optimized for helpfulness",
    contextLength: 128000,
  },
];

export const DEFAULT_MODEL_ID = NIM_MODELS[0].id;

export const NIM_BASE_URL = "https://integrate.api.nvidia.com/v1";

export function getModelName(id: string): string {
  return NIM_MODELS.find((m) => m.id === id)?.name ?? id;
}
