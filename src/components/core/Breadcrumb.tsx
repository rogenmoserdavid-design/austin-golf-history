import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className}`}
    >
      <ol className="flex items-center gap-2" role="list">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="text-golf-cream/60 hover:text-golf-gold transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold rounded"
            aria-label="Home"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
          </Link>
        </li>

        {/* Separator after home */}
        <li role="presentation" aria-hidden="true">
          <ChevronRight className="w-4 h-4 text-golf-cream/40" />
        </li>

        {/* Items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-golf-cream/60 hover:text-golf-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-golf-gold font-medium" aria-current="page">
                {item.label}
              </span>
            )}

            {/* Separator (not after last item) */}
            {index < items.length - 1 && (
              <span role="presentation" aria-hidden="true">
                <ChevronRight className="w-4 h-4 text-golf-cream/40" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
