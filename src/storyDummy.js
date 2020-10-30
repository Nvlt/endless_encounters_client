const story = {
    "id": 1,
    "type": "town",
    "displayText": "Welcome to the town of blaahhh",
    "combat": false,
    "fromCombat": false,
    "name": "blaahhh",
    "lastTavern": "the broken blah",
    "lastTown": "blaahhh",
    "desc": "a boring place",
    "choices": [
        {
            "displayName": "explore",
            "name": "town",
            "desc": "Go to a town.",
            "cost": 0,
            "type": "harmless"
        },
        {
            "displayName": "tavern",
            "name": "tavern",
            "desc": "Go to a tavern.",
            "cost": 0,
            "type": "harmless"
        }
    ],
    "player": {
        "id": 1,
        "type": "player",
        "name": "v",
        "desc": "a cat",
        "abilities": [
            {
                "displayName": "Fire Ball",
                "name": "Fire Ball",
                "desc": "Cast a Fire Ball.",
                "cost": 5,
                "type": "offense"
            },
            {
                "displayName": "flee",
                "name": "town",
                "desc": "Go to a town.",
                "cost": 0,
                "type": "harmless"
            }
        ],
        "stats": {
            "str": 1,
            "dex": 2,
            "int": 3,
            "stam": 4,
            "will": 5,
            "agi": 6,
            "cha": 7
        },
        "job": {
            "name": "Mage",
            "desc": "a wispy wizard person",
            "key": "Mage",
            "base_stats": {
                "str": 2,
                "dex": 12,
                "int": 20,
                "stam": 5,
                "will": 10,
                "agi": 13,
                "cha": 10
            },
            "abilities": {
                "Attack": {
                    "name": "Attack",
                    "desc": "A basic attack.",
                    "cost": 0,
                    "type": "offense"
                },
                "Wizard Slap": {
                    "name": "Unarmed Attack",
                    "desc": "An attack with a bare fist.",
                    "cost": 0,
                    "type": "harmless"
                },
                "heal": {
                    "name": "heal",
                    "desc": "Heal yourself for int * 5 hp.",
                    "cost": 0,
                    "type": "harmless"
                },
                "End Turn": {
                    "name": "End Turn",
                    "desc": "end your turn.",
                    "cost": 0,
                    "type": "harmless"
                },
                "flee": {
                    "name": "town",
                    "desc": "Go to a town.",
                    "cost": 0,
                    "type": "harmless"
                }
            }
        },
        "level": 50,
        "speechType": "basic",
        "statPoints": 0,
        "exp": 0,
        "max_exp": 1000,
        "hp": 50,
        "max_hp": 150,
        "mp": 300,
        "max_mp": 300,
        "current_event": 1,
        "hostility": false
    },
    "ap": 10,
    "turn": "player",
    "entities": [
        {
            "id": 2,
            "type": "basic",
            "name": "bob",
            "desc": "a cat",
            "abilities": [
                {
                    "displayName": "Fire Ball",
                    "name": "Fire Ball",
                    "desc": "Cast a Fire Ball.",
                    "cost": 5,
                    "type": "offense"
                },
                {
                    "displayName": "flee",
                    "name": "town",
                    "desc": "Go to a town.",
                    "cost": 0,
                    "type": "harmless"
                }
            ],
            "stats": {
                "str": 1,
                "dex": 2,
                "int": 3,
                "stam": 4,
                "will": 5,
                "agi": 6,
                "cha": 7
            },
            "job": {
                "name": "Warrior",
                "desc": "Big smashy boy",
                "key": "Warrior",
                "base_stats": {
                    "str": 15,
                    "dex": 12,
                    "int": 8,
                    "stam": 14,
                    "will": 0,
                    "agi": 13,
                    "cha": 10
                },
                "abilities": {
                    "Attack": {
                        "name": "Attack",
                        "desc": "A basic attack.",
                        "cost": 0,
                        "type": "offense"
                    },
                    "Heavy": {
                        "name": "Heavy Attack",
                        "desc": "An heavy attack with a melee weapon.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "Quick": {
                        "name": "Quick Attack",
                        "desc": "An quick attack.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "Punch": {
                        "name": "Unarmed Attack",
                        "desc": "An attack with a bare fist.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "Whirlwind": {
                        "name": "Whirlwind",
                        "desc": "Spin furiously, attacking multiple times",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "End Turn": {
                        "name": "End Turn",
                        "desc": "end your turn.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "flee": {
                        "name": "town",
                        "desc": "Go to a town.",
                        "cost": 0,
                        "type": "harmless"
                    }
                }
            },
            "level": 50,
            "speechType": "basic",
            "statPoints": 0,
            "exp": 0,
            "max_exp": 1000,
            "hp": 50,
            "max_hp": 150,
            "mp": 300,
            "max_mp": 300,
            "current_event": 1,
            "hostility": true
        }
    ]
}

export default story