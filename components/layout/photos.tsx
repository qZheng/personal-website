import Image from "next/image";

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoThumbProps = {
  photo: Photo;
  onClick: () => void;
  className?: string;
};

function PhotoThumb({ photo, onClick, className = "" }: PhotoThumbProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-200 group-hover:scale-105"
      />
    </button>
  );
}

type PatternTwoLandscapesProps = {
  photos: [Photo, Photo];
  onSelect: (photo: Photo) => void;
};

export function PatternTwoLandscapes({
  photos,
  onSelect,
}: PatternTwoLandscapesProps) {
  const [left, right] = photos;
  return (
    <div className="grid gap-2 md:grid-cols-2">
      <PhotoThumb
        photo={left}
        onClick={() => onSelect(left)}
        className="aspect-video"
      />
      <PhotoThumb
        photo={right}
        onClick={() => onSelect(right)}
        className="aspect-video"
      />
    </div>
  );
}

type PatternThreeVerticalsProps = {
  photos: [Photo, Photo, Photo];
  onSelect: (photo: Photo) => void;
};

export function PatternThreeVerticals({
  photos,
  onSelect,
}: PatternThreeVerticalsProps) {
  const [p1, p2, p3] = photos;
  return (
    <div className="grid gap-2 md:grid-cols-3">
      <PhotoThumb
        photo={p1}
        onClick={() => onSelect(p1)}
        className="aspect-3/4"
      />
      <PhotoThumb
        photo={p2}
        onClick={() => onSelect(p2)}
        className="aspect-3/4"
      />
      <PhotoThumb
        photo={p3}
        onClick={() => onSelect(p3)}
        className="aspect-3/4"
      />
    </div>
  );
}

type PatternVertTwoHorizProps = {
  vertical: Photo;
  top: Photo;
  bottom: Photo;
  onSelect: (photo: Photo) => void;
};

export function PatternVertTwoHoriz({
  vertical,
  top,
  bottom,
  onSelect,
}: PatternVertTwoHorizProps) {
  return (
    <div className="grid gap-2 md:grid-cols-[minmax(0,1.7fr)_minmax(0,2fr)]">
      <PhotoThumb
        photo={vertical}
        onClick={() => onSelect(vertical)}
        className="aspect-3/4 md:aspect-auto md:row-span-2 md:h-full"
      />
      <PhotoThumb
        photo={top}
        onClick={() => onSelect(top)}
        className="aspect-video md:col-start-2"
      />
      <PhotoThumb
        photo={bottom}
        onClick={() => onSelect(bottom)}
        className="aspect-video md:col-start-2"
      />
    </div>
  );
}

type PatternTwoHorizVertProps = {
  vertical: Photo;
  top: Photo;
  bottom: Photo;
  onSelect: (photo: Photo) => void;
};

export function PatternTwoHorizVert({
  vertical,
  top,
  bottom,
  onSelect,
}: PatternTwoHorizVertProps) {
  return (
    <div className="grid gap-2 md:grid-cols-[minmax(0,2fr)_minmax(0,1.7fr)] md:auto-rows-[1fr]">
      <PhotoThumb
        photo={top}
        onClick={() => onSelect(top)}
        className="aspect-video md:col-start-1 md:row-start-1"
      />
      <PhotoThumb
        photo={bottom}
        onClick={() => onSelect(bottom)}
        className="aspect-video md:col-start-1 md:row-start-2"
      />
      <PhotoThumb
        photo={vertical}
        onClick={() => onSelect(vertical)}
        className="aspect-3/4 md:aspect-auto md:col-start-2 md:row-span-2 md:row-start-1 md:h-full"
      />
    </div>
  );
}
type PatternSingleProps = {
  photo: Photo;
  onSelect: (photo: Photo) => void;
};

export function PatternSingle({ photo, onSelect }: PatternSingleProps) {
  return (
    <div>
      <PhotoThumb
        photo={photo}
        onClick={() => onSelect(photo)}
        className="aspect-video"
      />
    </div>
  );
}
