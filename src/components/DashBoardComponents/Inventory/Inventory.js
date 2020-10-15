import React from 'react'
import InventoryItem from '../InventoryItem/InventoryItem'

// const itemDefaults=[
//   {name: 'Sword of Justin', rarity: 'rare', desc: 'Does a thing'},
//   {name: 'Buckler', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Slicer', rarity: 'uncommon', desc: 'Does a thing'},
//   {name: 'Worn Gloves', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Pelt', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Rotten Meat', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Swift Boots', rarity: 'uncommon', desc: 'Does a thing'},
//   {name: 'Scroll of Healing', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Rock', rarity: 'common', desc: 'Does a thing'},
//   {name: 'The Wipeout', rarity: 'rare', desc: 'Does a thing'},
//   {name: 'Cheese', rarity: 'common', desc: 'Does a thing'},
//   {name: 'Speed Potion', rarity: 'uncommon', desc: 'Does a thing'}
// ]

// export default function Inventory({items=itemDefaults}) {
//   function fetchInventory() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res => res.json())
//       .then(json => console.log(json));
//   }
//   function listItems() {
//     //fetch inventory here with id
//     const inventoryList=items.map((item, index) => {
//       return <InventoryItem item={item} key={index} index={index} />
//     })
//     return (
//       <div className="inventory border bg-snow flex flex-2 rounded-lightest flex-row-wrap center
//       shrink-none m-1 max-height-40 min-w-4r width-full p-1-2">
//         {inventoryList}
//       </div>
//     )
//   }
//   return listItems();


// }

export default function Inventory() {


  return (
    <div className="inventory border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col-wrap shrink-none max-width-80 mx-2 max-height-40 overflow-scroll p-1">
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className=" bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
    </div>)
}
