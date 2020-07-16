import React from "react";

import EventRow from "../components/EventRow";

const Table = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Event Id</th>
            <th>Event created at</th>
            <th>User Id</th>
            <th>User created at</th>
          </tr>
        </thead>
        <tbody>
          <EventRow />
        </tbody>
      </table>
    </>
  );
};

export default Table;
