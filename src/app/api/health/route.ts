import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const rows = await prisma.$queryRawUnsafe<{ now: string }[]>('select now() as now');
    return NextResponse.json({ ok: true, now: rows?.[0]?.now ?? null });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
