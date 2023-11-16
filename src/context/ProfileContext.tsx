import { createContext, createSignal, useContext } from "solid-js";

export const ProfileContext = createContext();

export function ProfileContextProvider(props: any) {
  const [profile, setProfile] = createSignal("Não logado");
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return useContext(ProfileContext);
}
