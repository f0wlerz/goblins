import type { ButtonInteraction } from "discord.js";
import { handleKiceButton } from "./handlers/handleKiceButton";

export const buttons: Record<
  string,
  (interaction: ButtonInteraction) => Promise<void>
> = {
  handleKiceButton: handleKiceButton,
};
