import React from 'react'
import InventoryItem from '../InventoryItem/InventoryItem'

const itemDefaults = [
  {name: 1, rarity: 'rare'},
  {name: 2, rarity: 'common'},
  {name: 3, rarity: 'uncommon'},
  {name: 4, rarity: 'rare'},
  {name: 5, rarity: 'common'},
  {name: 6, rarity: 'uncommon'},
  {name: 7, rarity: 'rare'},
  {name: 8, rarity: 'common'},
  {name: 9, rarity: 'uncommon'},
  {name: 10, rarity: 'rare'},
  {name: 11, rarity: 'common'},
  {name: 12, rarity: 'uncommon'}
]

export default function Inventory({items = itemDefaults}) {
  function listItems() {
    const inventoryList = items.map(item => {
      return <InventoryItem item={item} />
    })
    return (
      <div className="inventory border bg-snow flex flex-2 rounded-lightest flex-row-wrap center
      shrink-none m-1 max-height-40 min-w-4r width-full overflow-scroll p-1-2">
        {inventoryList}
      </div>
    )
  }
  return listItems();
  // return (
  //   <div className="inventory border bg-snow flex flex-2 rounded-lightest flex-row-wrap center
  //   shrink-none m-1 max-height-40 min-w-4r width-full overflow-scroll p-1-2">
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //     <div className=" bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none"></div>
  //   </div>)
}
