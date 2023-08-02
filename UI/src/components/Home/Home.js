import React from 'react';
import Table from '../Common/Table';

const HomeComponent = ({milkValues}) => {
    const {headCells, data} = milkValues;
    return (
        <div>
            <h2>Milk</h2>
            <div><span>sell</span> <button>switch</button> <span>buy</span></div>
            <div>Morning : <input type="text" /> EVENING: <input type="text" /> </div>

            <div>
                <Table header={headCells} body={data} />
            </div>

            <div>
              Pregnancy Injection
              <Table header={headCells} body={data} />
            </div>

            <div>
              List of Cows
              <span>Total: 5</span>
              <div>Male: 2</div>
              <span>Female: 3</span>
              <div>
                <img />
                <label>cow 1</label>
                <label>Age</label>
              </div>
            </div>


            
            {/* ------------------------------------ */}

            {/* <SmartTable rowsPerPage={15} data={data} headCells={headCells} /> */}

            
            <hr />
        



            {/* ------------------------------------ */}
            <div>
                <button
                    aria-label="Increment value"
                    // onClick={() => increment(count)}
                >
                    Increment
                </button>
                {/* <span>{count}</span> */}
            </div>
        </div>
    )
}

export default HomeComponent;