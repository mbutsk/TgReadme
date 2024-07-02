const urlParams = new URLSearchParams(window.location.search);
const ChannelId = urlParams.get('id');
console.log(ChannelId)

const botToken = '7220619817:AAGUWy_s22c5_3VTuLNrjccGDEdOWA0UR4c';

async function fetchSubscribersCount() {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=${ChannelId}`);
    const data = await response.json();
    const subscribersCount = data.result;
    if (subscribersCount) {
        document.getElementById('telegram-users').textContent = subscribersCount;
    }
    else {
        document.getElementById('telegram-users').textContent = "Error"
    }
}

fetchSubscribersCount();