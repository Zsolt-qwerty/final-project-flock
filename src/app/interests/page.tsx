import { createClient } from '../utils/supabase/server';

// Query for Hubs page which shows all of the available interests, to be used as buttons
export default async function Interests() {
    const supabase = await createClient();
    const { data: interests } = await supabase.from("interests").select();

    return <pre>{JSON.stringify(interests, null, 2)}</pre>
};

// Query for search bar on Hubs page
async function InterestSearch(search: string) {
    // call to the server which accesses the database via the keys
    const supabase = await createClient();
    //Queries the table with our given parameter
    const { data: interests } = await supabase.from("interests").select(search);
    //renders the result - OK for now
    return <pre>{JSON.stringify(interests, null, 2)}</pre>
};
