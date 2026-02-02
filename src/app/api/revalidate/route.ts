import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate the 'posts' tag (which we added to fetchData.ts)
    revalidateTag('posts');
    
    // Also revalidate specific paths just in case
    revalidatePath('/');
    revalidatePath('/articles');

    console.log('Revalidated posts tag and paths');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}

// Allow GET requests as well for easy testing in browser
export async function GET(request: NextRequest) {
  return POST(request);
}
