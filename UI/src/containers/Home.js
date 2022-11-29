import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIncrement } from '../actions/app.action';
import { FiEdit3 } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';
import Table from '../components/Common/Table';
import '../static/scss/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from '../components/Home/Home';


const intialValue = {
    date: Date.now(),
    morning: 4.0,
    evening: 3.0
}

const Home = ({count, increment}) => {
    const [selectedRow, setSelectedRow] = useState();
    const [ currentCycle, setCurrentCycle] = useState([intialValue]);

    const action = selectedRow ? <FiEdit3 /> : <TiTickOutline />
    const headCells = [
        {
          id: 'date',
          numeric: false,
          label: 'Date',
          width: 200,
        },
        {
          id: 'morning',
          numeric: false,
          label: 'Morning',
          width: 50,
        },
        {
          id: 'evening',
          numeric: false,
          label: 'Evening',
          width: 50,
        },
        {
          id: 'action',
          numeric: false,
          label: 'Action',
          width: 20,
        }
      ];
      
      const data = [
        {
          _id: '6144145976c7fe',
          morning: 4.5,
          evening: 5,
          date: '2021-09-17 19:10:50',
          action: action
        },
        {
          _id: '6143989f9d87cc',
          morning: 4.5,
          evening: 5,
          date: '2021-09-16 22:18:31',
          action: action
        },
        {
          _id: '614397edc9177d8c8',
          morning: 4.5,
          evening: 5,
          date: '2021-09-16 22:15:57',
          action: action
        },
        {
          _id: '6143be67dfca4985c',
          morning: 4.5,
          evening: 5,
          date: '2021-09-16 21:33:04',
          action: action
        },
        {
          _id: '61141e57a7dbd8a189e',
          morning: 4.5,
          evening: 5,
          date: '2021-08-11 22:00:39',
          action: action
        },
      ];


    const value = '';
    const id = '';
    return (
        <div className='body'>
            <HomeComponent milkValues={{headCells, data}}/>
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.app.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: (value) => dispatch(addIncrement(value)),
})

/** if use multiple actions functions will be use like this. */
/*
import * as actions from './actions';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => ({
    increment: bindActionCreators(...actions, dispatch),
})
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home);