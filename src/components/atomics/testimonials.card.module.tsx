import Image from "next/image";

export interface HCard {
  userName: string;
  product_bought: { objectId: string; name: string }[];
  review: string;
  userImage: string;
}

export default function Testimonials({
  userName,
  product_bought,
  review,
  userImage,
}: HCard) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col items-center text-center p-6">
      <Image
        src={
          userImage
            ? userImage
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
        alt={userName}
        width={64}
        height={64}
        className="w-30 h-30 rounded-full object-cover border-4 border-gray-300 mb-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black">{userName}</h2>
        <p className="text-sm text-gray-500">
          {product_bought?.map((product) => product.name).join(", ") ||
            "No product purchased"}
        </p>
        <p className="text-sm text-gray-500 mt-5">{review}</p>
      </div>
    </div>
  );
}