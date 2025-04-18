export async function getVimeoVideos() {
  const res = await fetch("https://api.vimeo.com/users/me/videos", {
    headers: {
      Authorization: `Bearer 7978b1ab6d9bfff86da40e49a1e42def`
    },
    next: { revalidate: 3600 }, // opcional pra cache no Next
  });

  if (!res.ok) {
    console.error("Erro ao buscar vídeos do Vimeo:", res.statusText);
    return [];
  }

  const data = await res.json();
  return data.data; // ou data dependendo do formato
}
  