"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

export function StarRating({ rating, max = 5, size = "sm" }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  };

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        const isFilled = i < rating;
        const isHalfFilled = i === Math.floor(rating) && rating % 1 !== 0;
        
        return (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              isFilled 
                ? "fill-yellow-400 text-yellow-400" 
                : isHalfFilled
                ? "fill-yellow-200/50 text-yellow-400/50"
                : "fill-transparent text-white/20"
            } transition-colors duration-200`}
          />
        );
      })}
    </div>
  );
}
