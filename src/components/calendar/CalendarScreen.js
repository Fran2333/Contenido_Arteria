import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { ModalPost } from '../modal/modal-post';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventSetActive, eventClearActiveEvent } from '../../actions/events';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const now = moment().minutes(0).seconds(0).add(1,'hours'); // 3:00:00
    const nowPlus1 = now.clone().add(1, 'hours');

    const initEvent = {
        title: '',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate(),
        brand: '',
        pauta: false,
        social: '',
        files: [],
        urls: []
    }

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const [modalIsOpen, setIsOpen] = useState(false);
    
    const [evento, setEvento] = useState(initEvent);


    const onDoubleClick = (e) => {
        setEvento(e);
        setIsOpen(prevent => !prevent)
    }

    const onSelectEvent = (e) => {
        dispatch( eventSetActive( e ) );
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e)
        dispatch( eventClearActiveEvent() );
    }

    const onDispatchModal = () =>{
        dispatch(uiOpenModal());
        setIsOpen(prevent => !prevent);
    }


    const eventStyleGetter = ( event, start, end, isSelected ) => {
        
        const style = {
            backgroundColor: 'red',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }


        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
            <ModalPost 
                modalIsOpen={modalIsOpen} 
                setIsOpen={setIsOpen}
                formInfo={evento}
                editInfo={onDispatchModal}
            />
        </div>
    )
}
