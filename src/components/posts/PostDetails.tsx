import { AppTemplate } from "../layout/AppTemplate";

type PostDetailsProps = {
  id: string;
};

export function PostDetails({ id }: PostDetailsProps) {
  return <AppTemplate>{id}</AppTemplate>;
}
