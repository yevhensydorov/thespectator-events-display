import React, { useContext } from "react";

import EventContext from "../contexts/EventsContext";

const EventRow = () => {
  const results = useContext(EventContext);

  return (
    <>
      {results &&
        results.payload.map((event) => {
          return (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.tags}</td>
              <td>{event.id}</td>
              <td>
                {`${new Date(event.createdAt).getUTCDate()}/${new Date(
                  event.createdAt
                ).getUTCMonth()}/${new Date(event.createdAt).getUTCFullYear()}`}
              </td>
              <td>{event.userId}</td>
              <td>
                {`${new Date(event.userCreatedAt).getUTCDate()}/${new Date(
                  event.userCreatedAt
                ).getUTCMonth()}/${new Date(
                  event.userCreatedAt
                ).getUTCFullYear()}`}
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default EventRow;
