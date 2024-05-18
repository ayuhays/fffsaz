// selfbot.js

const { exec } = require('child_process');

const channelId = process.env.CHANNEL_ID;
const token = process.env.DISCORD_TOKEN;

const command = `ffmpeg -f lavfi -i anullsrc -ar 44100 -ac 2 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le -i /dev/zero -acodec pcm_s16le -ac 2 -ar 48000 -f s16le pipe:1`;

const options = {
    maxBuffer: 1024 * 1024 * 10, // Set max buffer size to 10 MB
};

exec(command, options, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

console.log('Self-bot is ready');
