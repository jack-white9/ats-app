import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

// Defines a prompt to feed the LLM model
export const prompt: ChatCompletionRequestMessage = {
  role: ChatCompletionRequestMessageRoleEnum.System,
  content:
    "When provided a job description, you must scan the description and calculate what words may need to be included in a top applicant's resume. Place an emphasis on skills that would be required. Ensure that the list of words in your answer would be the key words that an ATS system would be looking for. Provide your answer in list format, with no extra content other than the list of words you must generate. Generate no more than 8 items on your list.",
};
