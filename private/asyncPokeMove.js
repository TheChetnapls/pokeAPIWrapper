const axios = require('axios');

let moveCheck = async (pokemon, pokeMove) => {
    let foundMove = false;
    let pokeResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    let moves = await pokeResponse.data.moves;
    let res = '';
    moves.forEach(move => {
        //returns if pokemon move doesn't match, or if move is already found
        if (pokeMove != move.move.name || foundMove) return;
        move.version_group_details.forEach(version => {
            if (version.level_learned_at == 0 || version.level_learned_at == 1 || foundMove) return;
            return
            console.log(`${pokemon} learns ${pokeMove} at level ${version.level_learned_at}`);
            foundMove = true;
        })
    })
    //in case pokemon can't learn the move
    if (!foundMove) {
        //console.log(`${pokemon} does not learn ${pokeMove}`);
        return res = `{ "learnsMove": false } `;
        console.log(res)
    } else {
        return res = `{ "learnsMove": true', "level": ${version.level_learned_at} }`;
    }
}

module.exports.check = moveCheck;