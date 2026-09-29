import { 
  SlashCommandBuilder, 
  EmbedBuilder, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle, 
  StringSelectMenuBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  PermissionFlagsBits 
} from 'discord.js';

export const PATROL_AREAS = [
  "🚔 HWY 55",
  "🏖️ Coastal District",
  "🏙️️ River City",
  "🏘️ Fairview",
  "🌲 Rural County",
  "🚑 EMS Coverage",
  "🚧 DOT Coverage"
];

export default {
  data: new SlashCommandBuilder()
    .setName('setup_patrol_embed')
    .setDescription('Posts the editable Patrol Areas embed.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Patrol Areas')
      .setColor('#336699');

    PATROL_AREAS.forEach((area) => {
      embed.addFields({ name: area, value: '(None)', inline: false });
    });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('edit_patrol_area_btn')
        .setLabel('Edit Staff Member Area')
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
