import { Logger } from "./utils/core/logger";
import { client, stopBot } from "./src/main";
import { config } from "./utils/core/config";
import { disconnectDatabase } from "./utils/core/database";

export const logger = Logger.init({
  minLevel: "debug",
  discordMinLevel: "info",
  discordWebhook: config.LOGS_WEBHOOK_URL,
  showFileInfo: false,
});

async function main() {
  logger.info("Démarrage de l'application...");

  try {
    logger.info("Connexion du bot Discord en cours...");
    await client.login(config.DISCORD_TOKEN);
  } catch (error) {
    logger.error(`Erreur lors du démarrage de l'application: ${error}`);
    process.exit(1);
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  logger.info("SIGINT reçu, arrêt du bot Discord...");
  await stopBot();
  await disconnectDatabase();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  logger.info("SIGTERM reçu, arrêt du bot Discord...");
  await stopBot();
  await disconnectDatabase();
  process.exit(0);
});

main();
