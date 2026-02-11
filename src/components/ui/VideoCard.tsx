import clsx from "clsx";
import Link from "next/link";
import { Pill } from "./Pill";

type Props = {
  title: string;
  meta: string;
  thumbnail?: string;
  href?: string;
  tag?: string;
  large?: boolean;
};

export function VideoCard({
  title,
  meta,
  thumbnail,
  href = "#",
  tag,
  large,
}: Props) {
  return (
    <Link href={href} className="group block no-underline">
      <div
        className={clsx(
          "glass rounded-2xl overflow-hidden transition-all",
          "hover:border-border2 hover:shadow-glowMagenta",
        )}
      >
        {/* Thumbnail */}
        <div
          className={clsx(
            "relative bg-bg1 overflow-hidden",
            large ? "h-52" : "h-36",
          )}
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                <span className="text-magenta text-lg">▶</span>
              </div>
            </div>
          )}

          {/* Tag overlay */}
          {tag && (
            <div className="absolute top-3 left-3">
              <Pill color="#EC407A">{tag}</Pill>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h4 className="font-display font-bold text-[0.85rem] text-text1 uppercase tracking-wide">
            {title}
          </h4>
          <p className="font-body text-[0.75rem] text-muted mt-1">{meta}</p>
        </div>
      </div>
    </Link>
  );
}
