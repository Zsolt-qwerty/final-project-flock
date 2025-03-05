import { createClient } from '../utils/supabase/server';

// Example query which returns and renders the curent interests from out database
export default async function Interests() {
    const supabase = await createClient();
    const { data: interests, error } = await supabase.from("interests").select("*").eq("interest_id", 1);

    return <pre>{JSON.stringify(interests, null, 2)}</pre>
};