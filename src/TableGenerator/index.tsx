import React, { useEffect, useState } from "react";

import { Statuses } from "../types/Enums";
import EventContext from "../contexts/EventsContext";
import { API_SERVER_URL } from "../constants/urls";

import Table from "../components/Table";

export const TableGenerator = () => {
  const [results, setResult] = useState({
    status: Statuses.loading,
    payload: [],
    errorMessage: null,
  });

  const fetchEvents = () => {
    fetch(`${API_SERVER_URL}`)
      .then((response) => response.json())
      .then((response) =>
        setResult({
          status: Statuses.loaded,
          payload: response,
          errorMessage: null,
        })
      )
      .catch((error) =>
        setResult({ status: Statuses.error, payload: [], errorMessage: error })
      );
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {results.status === Statuses.loading && <div>Loading...</div>}
      {results.status === Statuses.error && (
        <div>Error while fetching events</div>
      )}
      {results.status === Statuses.loaded && (
        <>
          <button onClick={fetchEvents}>Fetch latest events</button>
          <EventContext.Provider value={results}>
            <Table />
          </EventContext.Provider>
        </>
      )}
    </>
  );
};
