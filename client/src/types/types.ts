export type ListingsType = {
  id: number;
  title: string;
  images: { url: string; thumbnailUrl: string }[];
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}
