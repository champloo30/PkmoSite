import React, { useState } from 'react'
import './postCalendar.scss'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { nanoid } from 'nanoid'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const events = [
  {
    title: '42nd Anniversary',
    start: '2023-02-19'
  }
]

function PostCalendar() {
  const [newEvent, setNewEvent] = useState({ id: '', title: '', start: '', end: ''})
  const [allEvents, setAllEvents] = useState(events)
  const [openForm, setOpenForm] = useState(true)
  const [openNewEvent, setOpenNewEvent] = useState(true)
  const [verify, setVerify] = useState(false)
  const [adminData, setAdminData] = useState({username: '', password: ''})
  
  const adminCredentials = {
    username: 'peaceadmin',
    password: 'peacekmo1981'
  }

  function handleDateSelect(info) {
    let title = newEvent.title
    let start = newEvent.start
    let end = newEvent.end
    let calendarApi = info.view.calendar

    calendarApi.unselect()
    
    if (title) {
      calendarApi.addEvent({
        id: nanoid(),
        title,
        start,
        end,
        allDay: info.allDay
      })
    }
  }

  function handleNewEvent(e) {
    e.preventDefault()
    events.push({
      title: newEvent.title,
      start: newEvent.start,
      end: newEvent.end
    })
    localStorage.setItem(events, newEvent)
    
    console.log(newEvent.title, newEvent.start, newEvent.end);
    console.log(events);
  }

  function handleEvents(events) {
   setAllEvents(events)
   console.log(allEvents);
  }

  function handleVerify() {
    if (adminData.username === adminCredentials.username && adminData.password === adminCredentials.password) {
      setVerify(true)
      window.alert('Peace Admin Verified')
      setAdminData({
        username: '',
        password: ''
      })
    } else {
      window.alert('Unauthorized User')
    }
  }

  function handleModal() {
    if (openForm === true) {
      document.getElementById('form-modal').style.display = 'flex'
    } else if (openForm === false) {
      document.getElementById('form-modal').style.display = 'none'
      setAdminData({
        username: '',
        password: ''
      })
    }
    setOpenForm(!openForm)
  }

  function handleNewEventModal() {
    if (openNewEvent === true) {
      document.getElementById('new-event-modal').style.display = 'flex'
    } else if (openNewEvent === false) {
      handleModal()
      document.getElementById('new-event-modal').style.display = 'none'
      setNewEvent({
        title: '',
        start: '',
        end: ''
      })
    }
    setOpenNewEvent(!openNewEvent)
  }

  return (
    <div className='post-calendar'>
      <div className="cal-container">
        <div className="cal-header">
          <h1>Calendar</h1>
          <div className="more-icon" onClick={handleModal}>
            <MoreVertIcon sx={{ color: 'black', cursor: 'pointer' }} />
          </div>
        </div>
        <form id='form-modal' className='cal-modal'>
          {verify === false ? 
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
                <button className='button' type='submit' onClick={handleVerify}>Verify</button>
                <button className='button' type='button' onClick={handleModal}>Cancel</button>
              </div>
            </>
            :
            <>
              <div className="verified">
                <h2>Verified</h2>
                <CheckCircleIcon 
                  sx={{
                    color: '#7C5296',
                    fontSize: 100
                  }} 
                />
              </div>
              <div className="modal-btns">
                <button className='button' type='button' onClick={handleNewEventModal}>New Event</button>
                <button className='button' type='button' onClick={() => setVerify(false)}>Log Out</button>
                <button className='button' type='button' onClick={handleModal}>Close</button>
              </div>
            </>
          }
        </form>
        <form id='new-event-modal' className='cal-modal-ne'>
          <h2>New Event</h2>
          <input 
            className='input'
            type="text" 
            placeholder='Title' 
            value={newEvent.title} 
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} 
          />
          <div className="dates">
            <input 
              className='date'
              type="text" 
              placeholder='Start: YYYY-MM-DD' 
              value={newEvent.start} 
              onChange={(e) => setNewEvent({...newEvent, start: e.target.value})} 
            />
            <input 
              className='date'
              type="text" 
              placeholder='End: YYYY-MM-DD' 
              value={newEvent.end} 
              onChange={(e) => setNewEvent({...newEvent, end: e.target.value})} 
            />
          </div>
          <div className="modal-btns">
            <button className='button' type='submit' onClick={handleNewEvent}>Add</button>
            <button className='button' type='button' onClick={handleNewEventModal}>Cancel</button>
          </div>
        </form>
        <div className="calendar-container">
          <FullCalendar
            height={500}
            // aspectRatio={1.5}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin ]}
            initialView='dayGridMonth'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            selectable={true}
            events={events}
            select={handleDateSelect}
          />
        </div>
        
      </div>
    </div>
  ); 
}

export default PostCalendar;