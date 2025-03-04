import { createClient } from '../utils/supabase/server';

export default async function Event() {
    const supabase = await createClient();
    const { data: event } = await supabase.from("event").select("event_location");

    return <pre>{JSON.stringify(event, null, 2)}</pre>
}