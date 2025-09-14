type PostProps = {
  url: string;
  title: string;
};

export function Post({ url, title }: PostProps) {
  return (
    <a href={url} class="flex flex-col items-center space-y-1">
      <div class="w-full h-44 bg-sky-500/75 rounded-sm" />
      <h1>{title}</h1>
    </a>
  );
}
