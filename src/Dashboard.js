import React from 'react';



export default function Dashboard() {


  return (

    <main className="flex flex-col center width-full ">
      <div className="flex-1 flex flex-col border center p-2 mt-4 m-1
      rounded-lightest justify-stretch max-height-40 overflow-scroll">
        <p className="flex-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
        <p className="flex-1">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p className="flex-1">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
        <p className="flex-1">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
        <p className="flex-1">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p className="flex-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
        <p className="flex-1">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p className="flex-1">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
        <p className="flex-1">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
        <p className="flex-1">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p className="flex-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
        <p className="flex-1">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p className="flex-1">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
        <p className="flex-1">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
        <p className="flex-1">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
      <div className="flex-1 flex flex-row max-width-80 width-full">
        <div className="flex flex-row flex-1 width-half">
          <button className="flex-1">Shop</button>
          <button className="flex-1">Tavern</button>
          <button className="flex-1">Explore</button>
        </div>
        <div className="flex flex-row flex-1 max-height-20 width-half">
          <button className="flex-1">inventory</button>
          <button className="flex-1">Gear</button>
          <button className="flex-1">Spells</button>
          <button className="flex-1">Abilities</button>
        </div>
      </div>
      <div className='char-stat-cont flex-1 border max-height-40 width-fit text-left'>
        <h3 className="flex-1 mx-1">Dr. Magenstein</h3>
        <h4 className="flex-1 mx-1">Mage</h4>
        <h5 className="flex-1 mx-1">Strength: 10</h5>
        <h5 className="flex-1 mx-1">Stamina:10</h5>
        <div id="hp-cont" name="hp-cont" className="hp-cont mx-1 flex flex-1 flex-row center">
          <p className="flex-1">HP</p>
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-red height-5px width-10px" />
          <div className="border flex-1 bg-timberwolf height-5px width-10px" />
          <div className="border flex-1 bg-timberwolf height-5px width-10px" />
        </div>
        <div id="ap-cont" name="ap-cont" className="ap-cont mx-1 flex flex-1 flex-row center">
          <p className="flex-1">AP</p>
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
          <div className="border flex-1 bg-verd height-5px width-10px" />
        </div>
        <div id="mana-cont" name="mana-cont" className="mana-cont mx-1 flex flex-1 flex-row center">
          <p className="flex-1">MP</p>
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
          <div className="border flex-1 bg-liberty height-5px width-10px" />
        </div>
      </div>

    </main>
  )
}
