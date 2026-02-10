import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { Country } from "@/types/country";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`/countries/${country.slug}`} className="group relative block aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
      <Image src={country.thumbnailUrl} alt={country.nameKo} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute top-4 left-4 z-10">
        <Badge visaStatus={country.visaStatus} stayDays={country.visaFreeStayDays} />
      </div>
      <div className="absolute bottom-5 left-5 z-10">
        <p className="text-xs text-white/50 uppercase tracking-widest mb-1">{country.nameEn}</p>
        <h3 className="text-2xl font-bold text-white">{country.nameKo}</h3>
      </div>
    </Link>
  );
}
