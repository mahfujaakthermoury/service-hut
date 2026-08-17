import Link from "next/link";

export default function ProviderCard({ info }) {
//   const shortInfo = info.info.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
      {/* Image */}
      <div className="flex items-center gap-4">
        <img
          src={info.image}
          alt={info.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{info.name}</h2>
          <p className="text-sm text-gray-600">{info.category}</p>
          <p className="text-sm text-blue-600">{info.location}</p>
        </div>
      </div>

      {/* info */}
      {/* <p className="mt-4 text-gray-700 text-sm">{shortInfo}</p> */}

      {/* Button */}
      <Link
        href={`/providers/${info.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        Read Full info
      </Link>
    </div>
  );
}