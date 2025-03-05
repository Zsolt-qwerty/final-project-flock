import { createClient } from './server';

// Example function which fetches a single location from event table
export async function GetEventByLocation() {
    const supabase = await createClient();
    const { data: event } = await supabase.from("event").select("event_location");
    return JSON.stringify(event, null, 2);
};


// Query to show events, users and comments under a specific interest/Hub

export async function GetEventsByInterest(Interest: string) {
    const supabase = await createClient();

    // return all events where interest matches Interest prop
    const { data: event } = await supabase.from("event").select().eq("event_name", Interest);

    return JSON.stringify(event, null, 2)
};


// Create an event which will be under a specific Hub
export async function AddEvent(/*Interest: string, Location: string, Description: string*/) {
    //Call the server
    const supabase = await createClient();
    //generate a uuid - Supabase may just do this?
    const uuid = null
    //Need to link the interest_id to interest_name
    //Interest will be a prop based upon the current state / Hub
    //create a record and return it
    const { data, error } = await supabase
        .from('events')
        .insert({
            id: uuid,
            interest_id: 1,
            location: "Newcastle",
            description: "stamp party"
        })
        .select();

    // --- only to fix deployment issues ---
    console.log(data, error);
    // return <pre>{JSON.stringify(data, null, 2)}</pre>
    // --- only to fix deployment issues ---

}

// Create a post which will be under a specific Hub or Event

// export default { GetEventByLocation, GetEventsByInterest, AddEvent }
