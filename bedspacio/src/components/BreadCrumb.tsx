"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <nav className="flex gap-2 text-[16px]">
            <Link href="/" className="hover:underline hover:text-[#0077C0]">Home</Link>

            {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");

                return (
                    <span key={href} className="flex gap-2">
                        <span>{'>'}</span>
                        <Link href={href} className="hover:underline hover:text-[#0077C0]">
                            {decodeURIComponent(segment)}
                        </Link>
                    </span>
                );
        })}
        </nav>
    );
}