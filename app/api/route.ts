import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
//import {getSession} from "next-auth/react";

export async function get(req, res) {
  const session = await getServerSession(req, authOptions);

  return NextResponse.json({ authenticated: !!session });
}
