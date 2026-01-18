"use client";

import Image from "next/image";
import { User } from "lucide-react";

interface UserAvatarProps {
  avatarUrl?: string | null;
  fallbackInitial?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-32 h-32",
};

const iconSizes = {
  sm: 18,
  md: 20,
  lg: 24,
  xl: 48,
};

const textSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
  xl: "text-4xl",
};

export default function UserAvatar({
  avatarUrl,
  fallbackInitial,
  size = "sm",
  className = "",
}: UserAvatarProps) {
  const sizeClass = sizeClasses[size];
  const iconSize = iconSizes[size];
  const textSize = textSizes[size];

  return (
    <div
      className={`${sizeClass} rounded-full bg-[#7EC8E3] flex items-center justify-center overflow-hidden ${className}`}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="User avatar"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      ) : fallbackInitial ? (
        <span className={`font-bold text-white ${textSize}`}>
          {fallbackInitial}
        </span>
      ) : (
        <User size={iconSize} className="text-white" />
      )}
    </div>
  );
}
