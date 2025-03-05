import { createClient } from '../utils/supabase/server';

// Query for Hubs page which shows all of the available interests, to be used as buttons
export default async function Interests() {
    const supabase = await createClient();
    const { data: interests } = await supabase.from("interests").select();

    return <pre>{JSON.stringify(interests, null, 2)}</pre>
};