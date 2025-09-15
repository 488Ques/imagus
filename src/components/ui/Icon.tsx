import { getIconData, iconToSVG } from "@iconify/utils";
import lucide from "@iconify-json/lucide/icons.json";
import { html, raw } from "hono/html";
import cn from "@/libs/cn";

const iconSets = {
  lucide,
};

// Define the props for your Icon component
type IconProps = {
  name: string;
  className?: string;
  // Allow other valid SVG attributes
  [key: string]: any;
};

export function Icon({ name, className, ...props }: IconProps) {
  const [prefix, iconName] = name.split(":");
  if (!prefix || !iconName) {
    console.warn(`Invalid icon name format: ${name}`);
    return null;
  }

  const iconSet = iconSets[prefix as keyof typeof iconSets];
  if (!iconSet) {
    console.warn(`Icon set not found: ${prefix}`);
    return null;
  }

  const iconData = getIconData(iconSet, iconName);
  if (!iconData) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  const renderData = iconToSVG(iconData, props);

  const svgAttributes = {
    ...renderData.attributes,
    class: cn(className),
  };

  // Convert attributes to a string
  const attrsToString = Object.entries(svgAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  // Create the raw SVG string
  const svgString = `<svg ${attrsToString}>${renderData.body}</svg>`;

  // Use the `html` helper to render the raw string
  return html`${raw(svgString)}`;
}
