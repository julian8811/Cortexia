"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Heart } from "lucide-react";

export function FavoriteButton({ toolId, initialIsFavorite }: { toolId: string, initialIsFavorite: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorite = async () => {
    if (!session) {
      alert("Debes iniciar sesión para guardar favoritos.");
      router.push("/login");
      return;
    }

    setIsLoading(true);
    try {
      if (isFavorite) {
        await fetch("/api/favorites", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ toolId }),
        });
        setIsFavorite(false);
      } else {
        await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ toolId }),
        });
        setIsFavorite(true);
      }
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      disabled={isLoading}
      className={`p-2 rounded-full border transition-colors ${
        isFavorite 
          ? "bg-rose-500/10 border-rose-500/50 text-rose-500" 
          : "bg-background border-border text-muted-foreground hover:text-foreground"
      }`}
      aria-label="Agregar a favoritos"
    >
      <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
    </button>
  );
}
