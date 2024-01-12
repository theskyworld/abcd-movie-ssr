import { VideoSelectorData } from "~/components/Base/VideoSelector/types";

export interface PageLibrariesProps {
  videoSelectorsData?: Array<VideoSelectorData>;
  url: string;
  tv?: boolean;
}
