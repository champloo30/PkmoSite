import React, { useState } from 'react'
import './postCalendar.scss'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: '42nd Church Anniversary',
    start: new Date(2023,1,19),
    end: new Date(2023,1,19)
  }
]

function PostCalendar() {
  const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})
  const [allEvents, setAllEvents] = useState(events)
  const [openForm, setOpenForm] = useState(true)
  const [openChecker, setOpenChecker] = useState(false)
  const [verify, setVerify] = useState(false)
  const [adminData, setAdminData] = useState({username: '', password: ''})
  
  const adminCredentials = {
    username: 'peaceadmin',
    password: 'peacekmo1981'
  }

  function handleNewEvent(e) {
    e.preventDefault()
    setAllEvents([...allEvents, newEvent])
    console.log(allEvents);
  }

  function handleChecker() {
    setOpenChecker(true)
  }

  function handleVerify() {
    if (adminData.username === adminCredentials.username) {
      setVerify(true)
      window.alert('Peace Admin Verified')
    } else {
      window.alert('Unauthorized User')
    }
    setOpenChecker(false)
  }

  function handleModal() {
    if (openForm === true) {
      document.getElementById('form-modal').style.display = 'flex'
    } else if (openForm === false) {
      document.getElementById('form-modal').style.display = 'none'
    }
    setOpenForm(!openForm)
  }

  return (
    <div className='post-calendar'>
      <div className="cal-container">
        <div className="cal-header">
          <h1>Calendar</h1>
          <button className='button' type='button' onClick={handleModal}>New Event</button>
        </div>
        <form id='form-modal' className='cal-modal'>
          {openChecker === true ? 
          <>
            <h2>Admin Check</h2>
            <input 
              className='input'
              type="text" 
              placeholder='Username' 
              value={adminData.username} 
              onChange={(e) => setAdminData({...adminData, username: e.target.value})} 
            />
            <input 
              className='input'
              type="password" 
              placeholder='Password' 
              value={adminData.password} 
              onChange={(e) => setAdminData({...adminData, password: e.target.value})} 
            />
            <div className="modal-btns">
              <button className='button' type='button' onClick={handleVerify}>Verify</button>
              <button className='button' type='button' onClick={() => setOpenChecker(false)}>Cancel</button>
            </div>
          </>
          :
          <>
            <h2>Add New Event</h2>
            <input 
              className='input'
              type="text" 
              placeholder='Add Title' 
              value={newEvent.title} 
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} 
            />
            <DatePicker 
              className='input picker'
              placeholderText='Start Date' 
              selected={newEvent.start} 
              onChange={(start) => setNewEvent({...newEvent, start})} 
            />
            <DatePicker 
              className='input picker'
              placeholderText='End Date' 
              selected={newEvent.end} 
              onChange={(end) => setNewEvent({...newEvent, end})} 
            />
            <div className="modal-btns">
              <button className='button' type='button' onClick={verify === false ? handleChecker : handleNewEvent}>{verify === false ? 'Verify Admin' : 'Add Event'}</button>
              <button className='button' type='button' onClick={handleModal}>Cancel</button>
            </div>
          </>
          }
        </form>
        <Calendar 
          className='cal-size' 
          localizer={localizer} 
          events={allEvents} 
          startAccessor='start' 
          endAccessor='end' 
        />
      </div>
    </div>
  ); 
}

export default PostCalendar;