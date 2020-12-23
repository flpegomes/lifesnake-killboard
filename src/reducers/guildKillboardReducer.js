import _ from 'lodash'

const initialState = {
    battles: []
};


export const guildKillboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MATCHES_SUCCESS':
            let alliances, guilds, players, winnerAlliance;
            let listBattles = []

            action.payload.map(data => {
                alliances = _.values(data.alliances)
                guilds = _.values(data.guilds)
                players = _.values(data.players)              
                winnerAlliance = _.maxBy(alliances, alliances.kills)
                const obj = { 
                    id: data.id,
                    startTime: data.startTime,
                    endTime: data.endTime,
                    timeout: data.timeout,
                    totalFame: data.totalFame,
                    totalKills: data.totalKills,
                    clusterName: data.clusterName,
                    players: players,
                    guilds: guilds,
                    alliances: alliances,
                    battle_TIMEOUT: data.battle_TIMEOUT,
                 }

                 listBattles.push(obj)
            })

            return {
                ...state,
                battles: listBattles
            };
        default:
        return state;
    }
};