import React from 'react';
import CharacterContext from '../../../contexts/CharacterContext';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

// export default function Inventory({items=[]}) {

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


  return (<div className="inventory-list">
    <div className="inventory border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-row-wrap max-width-80p mx-2 max-height-40p overflow-scroll p-2">
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
    </div>
    <div className="inventory border bg-snow center min-w-4r flex flex-2 rounded-lightest
        flex-row-wrap max-width-80p mx-2 max-height-40p overflow-scroll p-2 m-5p">
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
    </div>
    <div className="inventory border bg-snow center min-w-4r flex flex-2 rounded-lightest
            flex-row-wrap max-width-80p mx-2 max-height-40p overflow-scroll p-2">
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
      <div className="flex-1 bg-timber rounded-light hover-inv width-4 height-4 m-1px shrink-none"></div>
    </div>
  </div>
  )
}
