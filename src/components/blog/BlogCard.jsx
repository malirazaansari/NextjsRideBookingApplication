export default function BlogCard({
    image,
    mediaType = "image",
    author,
    date,
    comments,
    tags,
    title,
    excerpt,
    link = "#",
  }) {
    return (
      <div className="border border-gray-200">
        {/* Thumbnail */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="top-2 left-2 absolute bg-[color:var(--color-primary)] px-2 py-1 rounded text-white text-xs">
            {mediaType === "video" ? "▶ VIDEO" : "🖼 IMAGE"}
          </div>
        </div>

        {/* Meta Info */}
        <div className="space-y-1 bg-black px-4 py-2 text-white text-xs">
          <div className="flex justify-between items-center">
            <span>Posted By {author}</span>
            <span>Comments {comments}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>{date}</span>
            <span className="text-[10px] text-gray-300">{tags.join(", ")}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-4">
          <h3 className="mb-2 font-semibold text-[color:var(--color-foreground)] text-sm">
            {title}
          </h3>
          <p className="mb-4 text-gray-500 text-xs">{excerpt}</p>
          <a
            href={link}
            className="font-bold text-[color:var(--color-primary)] text-xs hover:underline"
          >
            READ MORE . .
          </a>
        </div>
      </div>
    );
  }
