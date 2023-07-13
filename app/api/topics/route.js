import connectMongoDb from "@/libs/mongdb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDb();

  await Topic.create({ title, description });

  return NextResponse.json(
    { success: true },
    { status: 201 },
    { message: "Topic created" }
  );
}

export async function GET() {
  await connectMongoDb();

  const topics = await Topic.find();

  return NextResponse.json(
    { success: true, topics },
    { status: 200 },
    { message: "Topics fetched" }
  );
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { success: true },
    { status: 200 },
    { message: "Topic deleted" }
  );
}
