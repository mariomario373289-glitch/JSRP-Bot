import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';
import { PATROL_AREAS } from '../../commands/patrol.js';

export default {
  customId: 'select_patrol_area',
  async execute(interaction) {
    const fieldIndex = parseInt(interaction.values[0], 10);
    const areaName = PATROL_AREAS[fieldIndex];

    const modal = new ModalBuilder()
      .setCustomId(`modal_edit_area_${fieldIndex}`)
      .setTitle(`Edit ${areaName}`);

    const staffInput = new TextInputBuilder()
      .setCustomId('staff_usernames')
      .setLabel('Staff Member Username(s)')
      .setPlaceholder('e.g., @User1 or @User1, @User2')
      .setStyle(TextInputStyle.Short)
      .setRequired(true);

    const modalRow = new ActionRowBuilder().addComponents(staffInput);
    modal.addComponents(modalRow);

    await interaction.showModal(modal);
  },
};
