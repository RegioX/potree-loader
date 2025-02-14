import { OctreeLoader } from "./OctreeLoader";
import { GetUrlFn, XhrRequest } from "../loading/types";

export async function loadOctree(
  url: string,
  query: string,
  getUrl: GetUrlFn,
  xhrRequest: XhrRequest
) {
  const trueUrl = await getUrl(url);
  const loader = new OctreeLoader();
  const { geometry } = await loader.load(trueUrl, query, xhrRequest);
  return geometry;
}
