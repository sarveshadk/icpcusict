"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");
    const email = searchParams.get("email") || "";
    const role = searchParams.get("role") || "";

    if (token && userId) {
      login({ id: userId, email, role: role || "STUDENT" }, token);

      if (role) {
        // Existing user with a role — go straight to dashboard
        router.push("/dashboard");
      } else {
        // New user — needs to select a role
        router.push(`/select-role?token=${token}&userId=${userId}`);
      }
    } else {
      router.push("/login");
    }
  }, [searchParams, login, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-muted-foreground font-mono">&gt; authenticating...</div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-muted-foreground font-mono">&gt; loading...</div>
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  );
}
