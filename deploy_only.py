import requests

VERCEL_TOKEN   = "LPnB2egbgRYUrUEALM0hYjyJ"
TELEGRAM_TOKEN = "7671327446:AAFboG0AejlXOSw1llAi10cHf-5QC4MnzLI"
TELEGRAM_CHAT_ID = "-1002691360105"

def trigger_deploy():
    return requests.post(
        "https://api.vercel.com/v13/deployments",
        json={
          "name":"bible-quest-studios",
          "target":"production",
          "gitSource":{"type":"github","repoId":"biblequeststudios/bible-quest-studios"}
        },
        headers={"Authorization":f"Bearer {VERCEL_TOKEN}"}
    ).json()

def send_telegram(text):
    requests.get(
      f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage",
      params={"chat_id": TELEGRAM_CHAT_ID, "text": text}
    )

if __name__=="__main__":
    res = trigger_deploy()
    send_telegram(f"Deploy response: {res}")
    print("Done—check Telegram for notification.")
