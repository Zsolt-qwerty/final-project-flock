// import { createClient } from '../utils/supabase/server';

// // Example function which fetches an single location from event table
// export default async function GetEventByLocation() {
//     const supabase = await createClient();
//     const { data: event } = await supabase.from("event").select("event_location");

//     return <pre>{JSON.stringify(event, null, 2)}</pre>
// };


// // Query to show events, users and comments under a specific interest/Hub

// async function GetEventByInterest(Interest: string) {
//     const supabase = await createClient();

//     // return all events where interest is Interest
//     const { data: event } = await supabase.from("event").select().eq("event_name", Interest);

//     return <pre>{JSON.stringify(event, null, 2)}</pre>
// };


// // Create an event which will be under a specific Hub
// async function AddEvent(/*Interest: string, Location: string, Description: string*/) {
//     //Call the server
//     const supabase = await createClient();
//     //generate a uuid - Supabase may just do this?
//     const uuid = null
//     //Need to link the interest_id to interest_name
//     //Interest will be a prop based upon the current state / Hub
//     //create a record and return it
//     const { data, error } = await supabase
//         .from('events')
//         .insert({
//             id: uuid,
//             interest_id: 1,
//             location: "Newcastle",
//             description: "stamp party"
//         })
//         .select();

//     // --- only to fix deployment issues ---
//     console.log(data, error);
//     // return <pre>{JSON.stringify(data, null, 2)}</pre>
//     // --- only to fix deployment issues ---

// }

// // Create a post which will be under a specific Hub or Event
