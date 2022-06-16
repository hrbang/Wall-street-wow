import querystring from 'querystring';

const basic = Buffer.from("7c23ffd614364f639fa1dc7d78ad0318:pF9POFQdYoHH0c28hjQQ6HMiHFefTMp4").toString("base64")
const TOKEN_ENDPOINT = `https://us.battle.net/oauth/token`

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'client_credentials',
        }),
    });

    return response.json();
};

export const getEuServers = async () => {
    const { access_token } = await getAccessToken();

    return fetch(`https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_US&access_token=${access_token}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

const handler = async (_, res) => {
    const response = await getEuServers();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ FoundRealms: false });
    }

    const data = await response.json();
    console.log(`Found ${data}`)
    
    const connectedRealm = data.realms.name;
    

    return res.status(200).json({
        connectedRealm
    });
};
export default handler;

