import { ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';
import { PATROL_AREAS } from '../../commands/patrol.js';

export default {
  id: 'edit_patrol_area_btn',
  async execute(interaction) {
    // 1. Tell Discord immediately that we received the click (stops the 3-second timeout)
    await interaction.deferReply({ ephemeral: true });

    const selectOptions = PATROL_AREAS.map((area, index) => ({
      label: area,
      value: index.toString(),
    }));

    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId('select_patrol_area')
      .setPlaceholder('Select an area to edit...')
      .addOptions(selectOptions);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    // 2. Send the actual select menu to the user
    await interaction.editReply({
      content: 'Select the patrol area you want to update:',
      components: [row],
    });
  },
};
