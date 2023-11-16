export async function getUserInfo() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_BACKEND_PROD}/users/profile`,
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
    return data.user;
  } catch (error) {
    return { redirect: true };
  }
}

export async function updatePoints() {}
