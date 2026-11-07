const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'MIDGARZOMBIE.aternos.me', 
        port: 55862,                         
        username: 'Bot_AFK_Aternos',        
        version: '26.3',
    });

    bot.on('spawn', () => {
        console.log('Il bot è entrato nel server!');
        // Fa saltare il bot ogni 60 secondi per non farlo cacciare dal controllo AFK
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 60000); 
    });

    bot.on('end', () => {
        console.log('Bot disconnesso. Riconnessione tra 10 secondi...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Errore del bot:', err));
}

createBot();
