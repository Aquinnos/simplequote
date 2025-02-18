import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    const quoteText = data[0].q;
    const quoteAuthor = data[0].a;

    return NextResponse.json({ q: quoteText, a: quoteAuthor });
  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quote.' },
      { status: 500 }
    );
  }
}
