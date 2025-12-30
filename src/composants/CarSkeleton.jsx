

const CarSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 animate-pulse">
      {/* Image skeleton */}
      <div className="h-32 sm:h-40 md:h-44 bg-neutral-200 rounded-lg mb-3"></div>

      {/* Texte skeleton */}
      <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-neutral-200 rounded w-1/2 mb-4"></div>

      {/* Bouton skeleton */}
      <div className="h-8 bg-neutral-200 rounded-lg"></div>
    </div>
  );
};


export default CarSkeleton;
