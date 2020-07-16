import React from "react";

import { Results } from "../types/Types";

const EventsContext = React.createContext<Results | undefined>(undefined);

export default EventsContext;
