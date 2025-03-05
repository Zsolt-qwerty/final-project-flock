import { getPostsByInterest } from '../../utils/supabase/posts';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     return NextResponse.json({ message: "API is working" });
// }
//Wasn't working because no API between the Client and Server side
//API route to fetch posts by interests
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const interest_id = searchParams.get("interest_id");

    if (!interest_id) {
        return NextResponse.json({ error: "Invalid interest_id" }, { status: 400 });
    }

    try {
        const posts = await getPostsByInterest(interest_id);
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}