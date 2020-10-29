const character = {
  stats: {
    hp: 25,
    hpMax: 31,
    mp: 7,
    mpMax: 21,
    str: 10,
    int: 10,
    dex: 10,
    sta: 15,
    spd: 11,
    ap: 5,

  },
  inventory: [
      {
        name: 'Sword of Justin',
        rarity: 'epic',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Buckler',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Slicer',
        rarity: 'uncommon',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Worn Gloves',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Pelt',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Rotten Meat',
        rarity: 'rare',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Swift Boots',
        rarity: 'uncommon',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')},
      {
        name: 'Scroll of Healing',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Rock',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'The Wipeout',
        rarity: 'legendary',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Cheese',
        rarity: 'common',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      },
      {
        name: 'Speed Potion',
        rarity: 'uncommon',
        desc: 'Does a thing',
        img: require('./assets/images/loyalty.png')
      }
  ],
  gear: {
    helm: {
      name: 'Merlin\'s Hat',
      rarity: 'rare',
      desc: '+2 To Will'
    },
    shoulders: {
      name: 'Tom Brady\'s Shoulderpads',
      rarity: 'epic',
      desc: '+2 to STAM'
    },
    chest: {
      name: 'Robe of Winter Night',
      rarity: 'rare',
      desc: '+5 to Frost And Shadow Damage'
    },
    gloves: {
      name: 'Hulk Hands',
      rarity: 'legendary',
      desc: '-1 to CHA'
    },
    legs: {
      name: 'Hot Pants',
      rarity: 'rare',
      desc: '+5 Fire Damage Resistance'
    },
    feet: {
      name: 'Boots of Haste',
      rarity: 'uncommon',
      desc: '+5 to Initiative rolls'
    },
    main: {
      name: 'Elder Wand',
      rarity: 'uncommon',
      desc: 'All Spells will hit'
    },
    off: {
      name: 'Lantern',
      rarity: 'common',
      desc: 'Can see in the dark up to 10 yds'
    }
  },
  abilities: [
    {
      id: 'strike',
      name: 'Strike',
      desc: 'Hit target with your main hand weapon.'
    },
    {
      id: 'punch',
      name: 'Punch',
      desc: 'Punch your target with a closed fist.'
    },
    {
      id: 'slap',
      name: 'Slap',
      desc: 'Slap your target with an open hand.'
    },
    {
      id: 'tickle',
      name: 'Tickle',
      desc: 'Tickle your target.'
    },
    {
      id: 'boast',
      name: 'Boast',
      desc: 'Loudly brag of your accomplishments to everyrone around you.'
    },
    {
      id: 'flatter',
      name: 'Flatter',
      desc: 'Attempt to flatter your target.'
    },
    {
      id: 'test-extreme',
      name: 'Test',
      desc: `Fill the entire page with tooltip text Cillum amet irure fugiat occaecat velit eiusmod proident. Tempor elit officia velit nostrud est enim amet minim. Cupidatat duis adipisicing ex ex.
        Elit ex nulla laborum quis proident reprehenderit elit esse laborum culpa dolor Lorem laborum. Pariatur deserunt nisi Lorem ad adipisicing veniam consequat dolore aute ut quis incididunt mollit ullamco. Amet consectetur exercitation culpa laboris do enim occaecat elit amet cillum in velit non. Sit elit mollit ex ea qui Lorem. Magna do sint veniam sunt occaecat deserunt magna enim anim eu. Ut dolor aliquip dolore cillum esse nostrud dolore aliquip culpa qui tempor. Proident aute aliqua est aute ea cupidatat proident elit in nostrud pariatur non Lorem.
        Dolore ex aute fugiat id aute ullamco occaecat do proident consequat consequat sunt. Laborum et dolor commodo minim duis ipsum occaecat do culpa voluptate. Sit mollit ipsum mollit in officia. Minim reprehenderit Lorem magna aute reprehenderit nostrud eiusmod aliqua consequat labore commodo voluptate. Aliqua Lorem aliqua anim nisi sit cupidatat nulla fugiat ut.
        Ullamco eiusmod quis occaecat aliqua. Magna cupidatat voluptate enim tempor ea sint magna irure dolore aute nostrud. Voluptate sint tempor sit sunt irure enim. Ut id fugiat id enim cupidatat incididunt est quis tempor laborum enim in. Reprehenderit tempor incididunt nisi ullamco est aliquip Lorem ea nulla ullamco incididunt. Voluptate dolor id anim aute Lorem tempor reprehenderit consectetur incididunt nostrud ea cillum occaecat. Voluptate nostrud cillum in reprehenderit incididunt.`
    }
  ],
  spells: [
    {
      id: 'fireball',
      name: 'Fireball',
      desc: 'Hurl a fiery ball at your target.  2 D 6 + INT Modifier'
    },
    {
      id: 'incinerate',
      name: 'Incinerate',
      desc: 'Set your target on fire.  1 D 4 for 4 Turns.'
    },
    {
      id: 'conjure-water',
      name: 'Conjure Water',
      desc: 'Conjure 1 Fresh Water to drink.  Replenish 1 D 4 MP.'
    },
    {
      id: 'polymorph',
      name: 'Polymorph',
      desc: 'Turn 1 Enemy to a harmless sheep for 5 turns.  Only 1 target can be polymorphed at a time.'
    },
    {
      id: 'magic-missile',
      name: 'Magic Missile',
      desc: 'Shoot a barrage of arcane missiles at your target.  1 D 4 DMG 1 D 6 Times.'
    },
    {
      id: 'telekinesis',
      name: 'Telekinesis',
      desc: 'You can move an object weighing up to 5 lbs up to 3 yards.'
    }
  ]
}

export default character;