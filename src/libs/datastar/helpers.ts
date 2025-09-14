function splitDataByNewline(data: string) {
  return data.split("\n");
}

function joinDataByNewline(data: string[]) {
  return data.join("\n");
}

function prefixData(data: string[], prefix: string): string[] {
  return data.map((line) => `${prefix} ${line}`);
}

export { splitDataByNewline, joinDataByNewline, prefixData };
