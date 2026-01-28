import { Button } from "@/components/ui/button";
import type React from "react";
import { useState } from "react";

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-dvh place-content-center place-items-center">
      <Button
        className="w-8 border"
        onClick={() => setCount((count) => count - 1)}
      >
        -1
      </Button>
      <span className="grid w-8 place-items-center">{count}</span>
      <Button
        className="w-8 border"
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </Button>
    </div>
  );
};
