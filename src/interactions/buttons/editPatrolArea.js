import { ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';
import { PATROL_AREAS } from '../../commands/patrol.js';

export default {
  customId: 'edit_patrol_area_btn',
  async execute(interaction) {
    const selectOptions = PATROL_AREAS.map((area, index) => ({
      label: area,
      value: index.toString(),
    }));

    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId('select_patrol_area')
      .setPlaceholder('Select an area to edit...')
      .addOptions(selectOptions);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    await interaction.reply({
      content: 'Select the patrol area you want to update:',
      components: [row],
      ephemeral: true,
    });
  },
};
