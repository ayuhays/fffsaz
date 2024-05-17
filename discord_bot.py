import os
import discord
import asyncio
from discord.ext import commands, tasks
from datetime import datetime, timedelta

TOKEN = os.environ.get('TOKEN')
CHANNEL_ID = int(os.environ.get('ID'))

client = discord.Client()

@client.event
async def on_ready():
    print('Bot is ready.')
    send_message.start()

@tasks.loop(minutes=1440)  # 24 hours in minutes
async def send_message():
    channel = client.get_channel(CHANNEL_ID)
    await channel.send("Daddy")

@send_message.before_loop
async def before_send_message():
    await client.wait_until_ready()
    now = datetime.utcnow()
    target_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
    if now > target_time:
        target_time += timedelta(days=1)
    delta = target_time - now
    await asyncio.sleep(delta.total_seconds())

client.run(TOKEN)
