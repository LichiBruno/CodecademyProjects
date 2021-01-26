const randomNumber = num => {
    return Math.floor(Math.random() * num)
}

const idea = {
    crypto: ['BTC', 'ETH'],
    action: ['Buy', 'HODL', 'Keep buying', 'Buy a little more'],
    advice: ["Even if you have bought and the price goes down, don't sell. Thank me in 6 months", 'Crypto is the future']
}

let finalIdea = []

for(let message in idea) {
    let option = randomNumber(idea[message].length)

    switch(message) {
        case 'crypto':
            finalIdea.push(`Cryptocurrency: ${idea[message][option]}.`)
            break
        case 'action':
            finalIdea.push(`You should: ${idea[message][option]}.`)
            break
        case 'advice':
            finalIdea.push(`Advice: ${idea[message][option]}.`)
            break
        default:
            finalIdea.push("Anyway, don't sell your crypto")
    }
}

function format() {
    const formatted = finalIdea.join('\n')
    console.log(formatted)
}

format(finalIdea);