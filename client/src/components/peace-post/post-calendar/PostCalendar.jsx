import React, { useEffect, useState } from 'react'
import './postCalendar.scss'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { nanoid } from 'nanoid'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// const events = [
//   {
//     title: '42nd Anniversary',
//     start: '2023-02-19',
//     end: ''
//   }
// ]

function PostCalendar() {
  // const [newEvent, setNewEvent] = useState({
  //   title: '',
  //   start: '',
  //   end: ''
  // })
  const [events, setEvents] = useState(null)
  // const [openForm, setOpenForm] = useState(true)
  // const [openNewEvent, setOpenNewEvent] = useState(true)
  // const [verify, setVerify] = useState(false)
  // const [adminData,  setAdminData] = useState({username: '', password: ''})

  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = 'https://apis.google.com/js/api.js'

    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.gapi) handleClientLoad()
    })
  })

  const SCOPES = 
    "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar"
  ;

  function openSignInPopup() {
    window.gapi.auth2.authorize(
      {client_id: process.env.CLIENT_ID, scopes: SCOPES },
      (res) => {
        if (res) {
          if (res.access_token) localStorage.setItem('access_token', res.access_token)

          window.gapi.client.load('calendar', 'v3', listUpcomingEvents)
        }
      }
    )
  }

  function handleClientLoad() {
    window.gapi.load('client:auth2', initClient)
  }

  function initClient() {
    if (!localStorage.getItem('access_token')) {
      openSignInPopup()
    } else {
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${process.env.API_KEY}&orderBy=startTime&singleEvents=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )
      .then((res) => {
        if (res.status !== 401) {
          return res.json()
        } else {
          localStorage.removeItem('access_token')

          openSignInPopup()
        }
      })
      .then((data) => {
        if (data?.items) {
          setEvents(formatEvents(data.items))
        }
      })
    }
  }

  function listUpcomingEvents() {
    window.gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        showDeleted: true,
        singleEvents: true
      })
      .then(function (response) {
        let events = response.result.items

        if (events.length > 0) {
          setEvents(formatEvents(events))
        }
      })
  }

  function formatEvents(list) {
    return list.map((item) => ({
      title: item.summary,
      start: item.start.dateTime || item.start.date,
      end: item.end.dateTime || item.end.date
    }))
  }
  
  const adminCredentials = {
    username: 'peaceadmin',
    password: 'peacekmo1981'
  }

  // function handleDateSelect(info) {
  //   let title = prompt()
  //   let calendarApi = info.view.calendar

  //   calendarApi.unselect()
    
  //   if (title) {
  //     setNewEvent(
  //       calendarApi.addEvent({
  //         id: nanoid(),
  //         title,
  //         start: info.startStr,
  //         end: info.endStr,
  //         allDay: info.allDay
  //       })
  //     )
      
  //     // setNewEvent(calendarApi.getEvents().map(item => (
  //     //   item.title
  //     // )))
  //     setAllEvents([...allEvents, newEvent])
  //     console.log(allEvents);
  //   }

    // console.log(newEvent);

    // console.log(calendarApi.getEvents().startStr);
    // console.log(calendarApi.getEvents().map(item => (
    //   item._def.title + ' ' + item.startStr
    // )));

    // calendarApi.getEvents().map(item => (
    //   item.getEventById(item.id)
    //   // localStorage.setItem('event', [item.id + ' - ' + item.title])
    // ))
  // }

  // function handleNewEvent(e) {
  //   e.preventDefault()
  //   setNewEvent({
  //     title: newEvent.title,
  //     start: newEvent.start,
  //     end: newEvent.end
  //   })
  //   const newE = [...allEvents, newEvent]
  //   setAllEvents(newE)
  //   localStorage.setItem('events', JSON.stringify(newE))

  //   handleNewEventModal()
  // }

  // function handleVerify() {
  //   if (adminData.username === adminCredentials.username && adminData.password === adminCredentials.password) {
  //     setVerify(true)
  //     window.alert('Peace Admin Verified')
  //     setAdminData({
  //       username: '',
  //       password: ''
  //     })
  //   } else {
  //     window.alert('Unauthorized User')
  //   }
  // }

  // function handleModal() {
  //   if (openForm === true) {
  //     document.getElementById('form-modal').style.display = 'flex'
  //   } else if (openForm === false) {
  //     document.getElementById('form-modal').style.display = 'none'
  //     setAdminData({
  //       username: '',
  //       password: ''
  //     })
  //   }
  //   setOpenForm(!openForm)
  // }

  // function handleNewEventModal() {
  //   if (verify === true && openNewEvent === true) {
  //     document.getElementById('new-event-modal').style.display = 'flex'
  //   } else if (openNewEvent === false) {
  //     handleModal()
  //     document.getElementById('new-event-modal').style.display = 'none'
  //     setNewEvent({
  //       title: '',
  //       start: '',
  //       end: ''
  //     })
  //   }
  //   setOpenNewEvent(!openNewEvent)
  // }

  return (
    <div className='post-calendar'>
      <div className="cal-container">
        <div className="cal-header">
          <h1>Calendar</h1>
          {/* <div className="more-icon" onClick={handleModal}>
            <MoreVertIcon sx={{ color: 'black', cursor: 'pointer' }} />
          </div> */}
        </div>
        {/* <form id='form-modal' className='cal-modal'>
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
        </form> */}
        {/* <form id='new-event-modal' className='cal-modal'>
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
        </form> */}
        <div className="calendar-container">
          <FullCalendar
            height={500}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin ]}
            initialView='dayGridMonth'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            selectable={true}
            events={events}
            eventColor='#7C5296'
            // select={handleDateSelect}
          />
        </div>
        
      </div>
    </div>
  ); 
}

export default PostCalendar;