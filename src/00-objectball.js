
function gameObject(){
    
    const obj = {
        home: {
            teamName:"Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                Alan_Anderson:{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 1,
                },
    
                Reggie_Evans:{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slam_dunks: 7,
                },
    
                Brook_Lopez:{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slam_dunks: 15,
                },
    
                Mason_Plumlee:{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slam_dunks: 5,
                },
    
                Jason_Terry:{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slam_dunks: 1
                }
            },
        },
    
        away: {
            teamName:"Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                Jeff_Adrien:{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slam_dunks: 2,
                },
    
                Bismak_Biyombo:{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slam_dunks: 10,
                },
    
                DeSagna_Diop:{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slam_dunks: 5,
                },
    
                Ben_Gordon:{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slam_dunks: 0,
                },
    
                Brendan_Haywood:{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slam_dunks: 12,
                }
            },
        }
    }

    return obj;
}

//console.log(gameObject())


function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

//console.log(homeTeamName());
/*
[below is the first try (obsolete)]

function numPointsScored(name){
    let object = gameObject();
    debugger
    for (let teamSide in object) {
            let side = object[teamSide]
            debugger
            for (let teamObj in side) {
                let obj = side[teamObj]
                debugger
                for (let teamInfo in obj) {
                    let info = obj[teamInfo];
                    debugger
                    if (typeof(info) === "object") {
                        for (let target in info) {
                            if (target === name) {
                                return playerName[points]
                            }
                        }
                    }
                }
            }
    }
}
*/

function numPointsScored(name){
    let object = gameObject();
    //debugger
    for (let teamSide in object) {
            let side = object[teamSide]
            //debugger
            for (let teamObj in side) {
                if (teamObj === "players") {
                    let obj = side[teamObj]
                    for (const playerName in obj) {
                        if (playerName === name) {
                            return obj[playerName]["points"]
                        }
                    }   
                }
            }
    }
}

/*
let a = numPointsScored("Ben_Gordon");
console.log(a);
*/

function shoeSize(name){
    let object = gameObject();
    //debugger
    for (let teamSide in object) {
            let side = object[teamSide]
            //debugger
            for (let teamObj in side) {
                if (teamObj === "players") {
                    let obj = side[teamObj]
                    for (const playerName in obj) {
                        if (playerName === name) {
                            return obj[playerName]["shoe"]
                        }
                    }   
                }
            }
    }
}

function teamColors(name){
    let object = gameObject();
    for (let teamSide in object) {
        let side = object[teamSide]
        if (side["teamName"] === name) {
            return side["colors"]
        }
    }
}


/*
let c = teamColors("Charlotte Hornets")
console.log(c);
*/

function teamNames(){
    let object = gameObject();
    const teams = []
    for (const teamSide in object) {
        const side = object[teamSide]
        teams.push(side["teamName"])
    }
    return teams
}


function playerNumbers(name){
    let object = gameObject();
    const jerseyNumbers = []
    for (let teamSide in object) {
        let side = object[teamSide]
        if (side["teamName"] === name) {
            for (const playerName in side["players"]) {
                let pn = side["players"][playerName]
                for (const stat in pn) {
                    if (stat === "number") {
                        jerseyNumbers.push(pn[stat])
                    }
                }
            }
        }
    }
    return jerseyNumbers
}

function playerStats(name){
    const object = gameObject();
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            if (playerName === name) {
                return side["players"][playerName]
            }
        }
    }
}

function bigShoeRebounds(){
    const object = gameObject();
    const shoeSizes = []
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            shoeSizes.push(side["players"][playerName]["shoe"])
        }
    }
    //return shoeSizes
    const max = Math.max(...shoeSizes)
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            if (side["players"][playerName]["shoe"] === max) {
                return side["players"][playerName]["rebounds"]
            }
        }
    }
}

//Bonus Questions:
function mostPointsScored(){
    const object = gameObject();
    const pointsScored = []
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            pointsScored.push(side["players"][playerName]["points"])
        }
    }
    //return pointsScored
    const max = Math.max(...pointsScored)
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            if (side["players"][playerName]["points"] === max) {
                return [playerName]
            }
        }
    }
}

function winningTeam(){
    const object = gameObject();
    let homeTeamScore = 0;
    let awayTeamScore = 0;
    const homeSide = object["home"]
    for (const playerName in homeSide["players"]){
        homeTeamScore += homeSide["players"][playerName]["points"]
    }
    const awaySide = object["away"]
    for (const playerName in awaySide["players"]){
        awayTeamScore += awaySide["players"][playerName]["points"]
    }
    if (homeTeamScore > awayTeamScore) {
        return object["home"]["teamName"]
    }else {
        return object["away"]["teamName"]
    }

}

function playerWithLongestName(){
    const object = gameObject();
    const nameLength = []
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            nameLength.push(playerName.length)
        }
    }
    //return nameLength
    const max = Math.max(...nameLength)
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            if (playerName.length === max) {
                return playerName
            }
        }
    }
}

//Super Bonus
function doesLongNameStealATon(){
    const object = gameObject();
    const steals = []
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]){
            steals.push(side["players"][playerName]["steals"])
        }
    }
    //return steals;
    const max = Math.max(...steals)
    const longestNamedPlayer = playerWithLongestName()
    for (const teamSide in object) {
        const side = object[teamSide]
        for (const playerName in side["players"]) {
           if (playerName === longestNamedPlayer) {
                if ((side["players"][longestNamedPlayer]["steals"]) >= max) {
                    return true;
                }else{
                    return false;
                }   
           }
        }
        
        //return side["players"]//[longestNamedPlayer] //["steals"]
        /*
        if ((side["players"][longestNamedPlayer]["steals"]) >= max) {
            return true;
        }else{
            return false;
        }
        */
    }
}