import { Show, createEffect, createResource } from "solid-js";
import { useProfileContext } from "../context/ProfileContext";

const getUserData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_BACKEND}/users/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data", error);
    return null;
  }
};

export default function Navbar() {
  const [profileFetcher] = createResource(getUserData);
  const { profile, setProfile }: any = useProfileContext();

  createEffect(() => {
    console.log("PROF", profile);
    setProfile(profileFetcher);
  });

  return (
    <nav class={`flex flex__between flex__align__center`}>
      <h1>AHH</h1>
      <Show
        when={profileFetcher()}
        fallback={
          <div>
            <a href="login">login</a>
          </div>
        }
      >
        <div>{profileFetcher().user.email}</div>
        <a href="profile">perfil</a>
      </Show>
      {/* <Link href="/">
        <Image
          alt="Website logo"
          width={80}
          height={60}
          priority
          src={"/logo.svg"}
        ></Image>
      </Link>

      <div class="flex g__1 flex__align__center">
        <div>
          <Link href="/blog">Posts</Link>
        </div>

        <div>
          <Link href="/quiz">Quiz</Link>
        </div>

        <div>
          {profile?.redirect !== true ? (
            <Link href="/profile/">
              {profile?.photo != null && (
                <Image
                  class="br-50"
                  alt="Image profile"
                  src={profile?.photo}
                  width={50}
                  height={50}
                ></Image>
              )}
              <p>{profile?.name}</p>
            </Link>
          ) : (
            <div>
              <Link href="/login">Fazer Login</Link>
            </div>
          )}
        </div>
      </div> */}
    </nav>
  );
}
