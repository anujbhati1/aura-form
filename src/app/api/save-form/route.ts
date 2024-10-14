import prisma from '@/lib/db';
import { formDataToObject } from '@/lib/formDataToObject';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const reqData = formDataToObject(formData);
    const newDoctor = await prisma.doctor.create({
      data: {
        name: reqData.name,
      },
    });
    return NextResponse.json({
      message: 'Success!',
      data: newDoctor,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
