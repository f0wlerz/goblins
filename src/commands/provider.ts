import {
  CommandInteraction,
  SlashCommandBuilder,
  type SlashCommandOptionsOnlyBuilder,
  type SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

import { ping } from "./handlers/ping";
import { quiz } from "./handlers/kicé";

export interface ICommand {
  data:
    | SlashCommandBuilder
    | SlashCommandOptionsOnlyBuilder
    | SlashCommandSubcommandsOnlyBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export const commands: ICommand[] = [ping, quiz];

export const commandsMap = new Map<string, ICommand>(
  commands.map((command) => [command.data.name, command]),
);
