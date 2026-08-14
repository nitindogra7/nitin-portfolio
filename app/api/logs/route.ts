import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type Logs = {
    logs: string;
};

export async function GET() {
    const supabase = await createClient();

    const { data: logs, error } = await supabase
        .from("user_logs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return NextResponse.json(
            {
                error: error.message,
                message: "Error fetching logs!",
            },
            { status: 500 }
        );
    }

    return NextResponse.json(
        {
            success: true,
            logs: logs ?? [],
        },
        { status: 200 }
    );
}

export async function POST(req: Request) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
        return NextResponse.json(
            {
                error: error?.message,
                message: "User not found!",
            },
            { status: 401 }
        );
    }

    const { logs }: Logs = await req.json();

    if (!logs || !logs.trim()) {
        return NextResponse.json(
            {
                message: "Logs content cannot be empty!",
            },
            { status: 400 }
        );
    }

    const user = data.user;
    const userName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.identities?.[0]?.identity_data?.full_name ||
        user.identities?.[0]?.identity_data?.name ||
        (user.email ? user.email.split("@")[0] : "Verified User");

    const userAvatar =
        user.user_metadata?.avatar_url ||
        user.user_metadata?.picture ||
        user.identities?.[0]?.identity_data?.avatar_url ||
        user.identities?.[0]?.identity_data?.picture ||
        (user.email ? `https://api.dicebear.com/7.x/notionists/svg?seed=${user.email}&backgroundColor=1a1a1a` : null);

    const userEmail = user.email || null;

    const { data: logsTable, error: errorLogs } = await supabase
        .from("user_logs")
        .insert({
            logs: logs.trim(),
            user_name: userName,
            user_avatar: userAvatar,
            user_email: userEmail,
        })
        .select()
        .single();

    if (errorLogs) {
        return NextResponse.json(
            {
                error: errorLogs?.message,
                message: "Error in inserting logs!",
            },
            { status: 500 }
        );
    }

    return NextResponse.json(
        {
            success: true,
            user: data.user,
            logs: logsTable,
        },
        { status: 200 }
    );
}