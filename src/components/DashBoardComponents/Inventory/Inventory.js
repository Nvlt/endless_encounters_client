import React from 'react'
import CharacterContext from '../../../contexts/CharacterContext';
import InventoryItem from '../InventoryItem/InventoryItem'

// const itemDefaults=[
//   {
//     name: 'Sword of Justin',
//     rarity: 'epic',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Buckler',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Slicer',
//     rarity: 'uncommon',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Worn Gloves',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Pelt',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Rotten Meat',
//     rarity: 'rare',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Swift Boots',
//     rarity: 'uncommon',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")},
//   {
//     name: 'Scroll of Healing',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Rock',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'The Wipeout',
//     rarity: 'legendary',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Cheese',
//     rarity: 'common',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   },
//   {
//     name: 'Speed Potion',
//     rarity: 'uncommon',
//     desc: 'Does a thing',
//     img: require("../../../assets/images/loyalty.png")
//   }
// ]

export default function Inventory({items=[]}) {

  function listItems() {
    //fetch inventory here with id
    const inventoryList=items.map((item, index) => {
      return <InventoryItem item={item} key={index} index={index} />
    })
    return (
      <div className="inventory border bg-snow flex flex-2 rounded-lightest flex-row-wrap center
      shrink-none m-1 max-height-40 min-w-4r width-full p-1-2">
        {inventoryList}
      </div>
    )
  }
  return listItems();


}

// export default function Inventory() {


//   return (
//     <div className="inventory border bg-snow center min-w-4r flex flex-2 rounded-lightest
//     flex-col-wrap shrink-none max-width-80 mx-2 max-height-40 overflow-scroll p-1">
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//       <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
//     </div>)
// }
