export const TWITCH_CHANNELS = sanitizeArrayEnvInput(
  import.meta.env.VITE_TWITCH_CHANNELS
);
export const TWITCH_CONFETTI_CMDS = getConffetiCommands();

function getConffetiCommands() {
  const cmds = sanitizeArrayEnvInput(import.meta.env.VITE_TWITCH_CONFETTI_CMDS);

  if (!cmds.length) return ["!confetti"];

  return cmds;
};

/** @param {string} input */
function sanitizeArrayEnvInput(input) {
  try {
    if (!input) return [];

    return input.split(",").map((x) => x.trim());
  } catch (error) {
    return [];
  }
}
