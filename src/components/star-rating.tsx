import { Star } from "lucide-react";
import { useState } from "react";

interface StartRatingProps {
  totalStars?: number;
  onRate?: (value: number) => void;
}

export function StarRating({ totalStars = 5, onRate }: StartRatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className="size-6 cursor-pointer transition text-[#FBB224]"
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(starValue)}
            fill={starValue <= (hover || rating) ? "currentColor" : "none"}
          />
        );
      })}
      <span className="text-[#6E6E6E] font-normal ml-2 md:text-xl">
        {rating.toFixed(1)} (42 avaliações)
      </span>
    </div>
  );
}
