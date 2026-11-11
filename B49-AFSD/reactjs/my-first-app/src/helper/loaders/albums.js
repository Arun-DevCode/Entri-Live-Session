export async function getAllPhotos(request) {
  const { id } = request.params;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id ?? 1}`,
    );
    const photos = await res.json();
    if (!photos && photos.length === 0) {
      return;
    }
    return photos;
  } catch (error) {
    console.log(error);
  }
}
