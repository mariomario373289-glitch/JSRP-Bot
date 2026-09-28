import { EmbedBuilder } from 'discord.js';
import { PATROL_AREAS } from '../../commands/patrol.js'; // Adjust path if inside utility/

export default {
  // If your bot matches custom IDs directly:
  customId: 'modal_edit_area', 
  
  async execute(interaction) {
    // Extract the index from the custom ID (e.g., modal_edit_area_2)
    const fieldIndex = parseInt(interaction.customId.split('_').pop(), 10);
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
    
    // Always acknowledge the modal submission
    await interaction.reply({ content: '✅ Patrol area updated!', ephemeral: true });
  },
};
