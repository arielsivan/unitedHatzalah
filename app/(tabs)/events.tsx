import React from 'react';
import SingleEvent from '@/components/Event/singleEvent';
import events from '@/mocks/event';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';

export default function EventsScreen() {
  const myEvents = events;

  return (
    <ScrollToTopContainer>
      {myEvents.map((event) => (
        <SingleEvent
          key={event.id}
          id={event.id}
          name={event.name}
          description={event.description}
          location={event.location}
          emoji={event.emoji}
          date={event.date}
          time={event.time}
        />
      ))}
    </ScrollToTopContainer>
  );
}
