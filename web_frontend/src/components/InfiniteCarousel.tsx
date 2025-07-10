const sentences = [
    "B.ZERO - HAARPER.",
    "TRIGGERING ANOTHER MANIC EPISODE FROM RAMPANT DRUG ABUSE - Holoblack, Jon T",
    "C4 - HAARPER",
    "Like This (feat. Lil Uzi Vert, Destroy Lonely) - Ken Carson",
    "Za Kimotho - Wakadinali",
    "Naliya - Batundi, Msaki, TRESOR",
    "Pain Remains I, II & III - Lorna Shore",
    "The Way - Bktherula",
    "Bossier City Kidnap Victims - $uicideboy$",
    "ABSTRACT - Bktherula",
    "L$D - A$AP Rocky",
    "Hate Cult Ritual - Whitechapel",
    "Elitist Ones - Whitechapel",
    "All Alone - Freddie Dredd",
    "Missing Man - James Blake & Lil Yachty",
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