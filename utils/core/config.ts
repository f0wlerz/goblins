import dotenv from "dotenv";

dotenv.config();

const {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  BOT_HOME_GUILD,
  OWNER_ID,
  LOGS_WEBHOOK_URL,
  REPORT_CHANNEL,
  MP_CHANNEL,
} = process.env;

if (
  !DISCORD_TOKEN ||
  !DISCORD_CLIENT_ID ||
  !BOT_HOME_GUILD ||
  !OWNER_ID ||
  !LOGS_WEBHOOK_URL ||
  !REPORT_CHANNEL ||
  !MP_CHANNEL
) {
  const missingVars = [];
  if (!DISCORD_TOKEN) missingVars.push("DISCORD_TOKEN");
  if (!DISCORD_CLIENT_ID) missingVars.push("DISCORD_CLIENT_ID");
  if (!BOT_HOME_GUILD) missingVars.push("EVE_HOME_GUILD");
  if (!OWNER_ID) missingVars.push("OWNER_ID");
  if (!LOGS_WEBHOOK_URL) missingVars.push("LOGS_WEBHOOK_URL");
  if (!REPORT_CHANNEL) missingVars.push("REPORT_CHANNEL");
  if (!MP_CHANNEL) missingVars.push("MP_CHANNEL");
  throw new Error(`Missing environment variables: ${missingVars.join(", ")}`);
}

/**
 * Configuration object for the Maskowlerz small goblin.
 *
 * @property {string} DISCORD_TOKEN - The token used to authenticate with the Discord API.
 * @property {string} DISCORD_CLIENT_ID - The client ID of the Discord application.
 * @property {string} BOT_HOME_GUILD - The ID of the home guild (server) for Maskowlerz.
 * @property {string} OWNER_ID - The ID of the owner of the bot.
 * @property {string} LOGS_WEBHOOK_URL - The URL of the webhook used for logging.
 * @property {string} REPORT_CHANNEL - The ID of the channel where reports are sent.
 * @property {string} MP_CHANNEL - The ID of the channel where MPs are sent.
 */

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  BOT_HOME_GUILD,
  OWNER_ID,
  LOGS_WEBHOOK_URL,
  REPORT_CHANNEL,
  MP_CHANNEL,
};
