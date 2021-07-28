import { createClient } from "pexels";

const pexelsAPIKey = process.env.VUE_APP_PEXELS_API_KEY;

const client = createClient(pexelsAPIKey);

export default {
  getImagesPerQuery(query) {
      return client.photos.search({query, per_page: 3 });
  }
}