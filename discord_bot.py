import discord
import os
import asyncio
from discord.ext import tasks
from keepalive import keep_alive

client = discord.Client()

# Function to send a message to a specific channel
async def send_message(channel_id, message):
    channel = client.get_channel(int(channel_id))
    await channel.send(message)

# Function to send the message at a specific time every day
@tasks.loop(hours=24)
async def send_daily_message():
    message = "Your message here" # Change this to your desired message
    channel_id = os.environ.get("CHANNEL_ID") # Get channel ID from environment variable
    await send_message(channel_id, message)

# Run the client with the token
@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    send_daily_message.start()

# Run the client with the token
client.run(os.environ.get("TOKEN"))
keep_alive()  # Keep the bot alive with keepalive.py
