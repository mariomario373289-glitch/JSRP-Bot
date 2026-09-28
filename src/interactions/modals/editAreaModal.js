import { EmbedBuilder } from 'discord.js';
import { PATROL_AREAS } from '../../commands/patrol.js';

export default {
  // Matches custom IDs starting with modal_edit_area_
  customIdPrefix: 'modal_edit_area_',
  async execute(interaction) {
    const fieldIndex = parseInt(interaction.customId.replace('modal_edit_area_', ''), 10);
    const newUsername = interaction.fields.getTextInputValue('staff_usernames');

    const originalEmbed = interaction.message.embeds[0];
    const updatedEmbed = EmbedBuilder.from(originalEmbed);

    const updatedFields = [...originalEmbed.fields];
    updatedFields[fieldIndex] = {
      name: PATROL_AREAS[fieldIndex],
      value: `(${newUsername})`,
      inline: false,
    };

    updatedEmbed.setFields(updatedFields);

    await interaction.message.edit({ embeds: [updatedEmbed] });
    await interaction.reply({ content: '✅ Patrol area updated!', ephemeral: true });
  },
};
