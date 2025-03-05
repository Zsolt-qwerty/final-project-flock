// import { createClient } from '../utils/supabase/server';

// Example function which fetches an single location from event table
// export default async function GetEventByLocation() {
//     const supabase = await createClient();
//     const { data: event } = await supabase.from("event").select("event_location");

//     return <pre>{JSON.stringify(event, null, 2)}</pre>
// };

import { getEventsByInterest } from "../utils/supabase/events"


const events = await getEventsByInterest("stamps");
console.log(events);
