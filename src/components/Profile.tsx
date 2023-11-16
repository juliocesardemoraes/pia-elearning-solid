import { Show } from "solid-js";
import { useProfileContext } from "../context/ProfileContext";
import { A } from "@solidjs/router";

export default function Profile() {
  const { profile }: any = useProfileContext();

  return (
    <div class="flex flex__column mt-1">
      Profile
      <Show when={profile()} fallback={<p>Loading...</p>}>
        <div>
          {profile()?.user?.email == null
            ? "Necessário logar"
            : profile().user.email}
        </div>
        <A
          class="button__anchor"
          href={`${import.meta.env.VITE_PUBLIC_BACKEND}/auth/google/logout`}
        >
          <button class="button danger mt-1">LOGOUT</button>
        </A>
      </Show>
    </div>
  );
}
