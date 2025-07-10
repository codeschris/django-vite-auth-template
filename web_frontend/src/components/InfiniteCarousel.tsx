const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Welcome to our amazing platform!",
    "Stay productive, stay inspired.",
    "Great things never come from comfort zones.",
    "Innovation distinguishes between a leader and a follower.",
    "Work hard in silence, let your success be your noise.",
    "Dream it. Wish it. Do it.",
    "Every day is a fresh start.",
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you.",
];

const InfiniteCarousel = () => {
    const renderedItems = sentences.concat(sentences); // duplicate for seamless loop

    return (
        <div className="overflow-hidden py-3 w-full border-y border-gray-300 bg-white">
            <div className="animate-marquee flex whitespace-nowrap">
                {renderedItems.map((text, index) => (
                    <span key={index} className="mx-6 text-sm text-gray-600 whitespace-nowrap">
            {text}
          </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;