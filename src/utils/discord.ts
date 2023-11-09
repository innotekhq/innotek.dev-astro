import {
  ChannelType,
  Client,
  GatewayIntentBits,
  EmbedBuilder,
} from "discord.js";

const { DISCORD_CHANNEL_ID, DISCORD_BOT_TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.login(DISCORD_BOT_TOKEN);

async function sendMessage(contactFormObject: { name: string, email: string, message: string }) {
  client.on("ready", () => {
    console.log(`Logged in as ${client?.user?.tag}!`);

    if (!DISCORD_CHANNEL_ID) {
      console.error("DISCORD_CHANNEL_ID is not set");
      return;
    }

    const channel = client.channels.cache.get(DISCORD_CHANNEL_ID);

    if (channel?.type === ChannelType.GuildText) {
      const embedMessage = new EmbedBuilder()
        .setColor("#0099ff") // You can set color of your choice
        .setTitle("New Message") // You can set title of your choice
        .addFields([
          {
            name: "Name",
            value: contactFormObject.name || "Not Specified",
            inline: true,
          },
          {
            name: "Email",
            value: contactFormObject.email || "Not Specified",
            inline: true,
          },
          {
            name: "Message",
            value: contactFormObject.message || "Not Specified",
          },
        ]);
      channel.send({ embeds: [embedMessage] });
    }
  });
}

export default sendMessage;
