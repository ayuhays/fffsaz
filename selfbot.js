// selfbot.js

const { exec } = require('child_process');

const channelId = process.env.CHANNEL_ID;
const token = process.env.DISCORD_TOKEN;

const command = `ffmpeg -f lavfi -i anullsrc -ar 44100 -ac 2 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le pipe:1 > /dev/null`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log('Self-bot is ready');
});
