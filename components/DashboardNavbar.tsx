"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import UserAvatar from "./UserAvatar";
import { useTheme } from "@/context/ThemeContext";

export default function DashboardNavbar() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();
  const { colors } = useTheme();

  useEffect(() => {
    const loadUserAndAvatar = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Load custom avatar from avatar_photos table
        const { data: avatarData } = await supabase
          .from("avatar_photos")
          .select("avatar_url")
          .eq("user_id", user.id)
          .single();

        if (avatarData?.avatar_url) {
          setAvatarUrl(avatarData.avatar_url);
        } else {
          // Fall back to OAuth avatar
          setAvatarUrl(user.user_metadata?.avatar_url || null);
        }
      }
    };
    loadUserAndAvatar();
  }, [supabase.auth, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b border-[#F0F0F0] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <rect width="52" height="52" rx="7" fill={colors.accent} />
            <path
              d="M0 36.7951C5.77778 34.2766 11.5556 34.2766 17.3333 36.7951C23.1111 39.3137 28.8889 39.3137 34.6667 36.7951C40.4444 34.2766 46.2222 34.2766 52 36.7951V46.8692C52 49.3877 49.1111 51.9063 46.2222 51.9063H5.77778C2.88889 51.9063 0 49.3877 0 46.8692V36.7951Z"
              fill={colors.accentLight}
            />
            <path
              d="M0 27.9517C5.77778 25.2244 11.5556 25.2244 17.3333 27.9517C23.1111 30.679 28.8889 30.679 34.6667 27.9517C40.4444 25.2244 46.2222 25.2244 52 27.9517V38.8608C46.2222 36.1335 40.4444 36.1335 34.6667 38.8608C28.8889 41.5881 23.1111 41.5881 17.3333 38.8608C11.5556 36.1335 5.77778 36.1335 0 38.8608V27.9517Z"
              fill={`${colors.accentLight}80`}
            />
            <ellipse
              cx="12.3223"
              cy="12.849"
              rx="3.32228"
              ry="3.84899"
              fill={colors.accentDark}
            />
            <ellipse
              cx="39.3223"
              cy="12.849"
              rx="3.32228"
              ry="3.84899"
              fill={colors.accentDark}
            />
            <path
              d="M19 22C19 22 25.5 29.5 33 22"
              stroke={colors.accentDark}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-2xl font-bold text-[#4A4A4A]">rambl</span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#7A7A7A] hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer"
            title="Log out"
          >
            <LogOut size={18} />
          </button>
          <Link
            href="/settings"
            className="hover:ring-2 hover:ring-offset-2 transition-all cursor-pointer rounded-full"
            style={{ "--tw-ring-color": colors.accent } as React.CSSProperties}
            title="Settings"
          >
            <UserAvatar avatarUrl={avatarUrl} size="sm" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
