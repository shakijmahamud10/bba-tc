import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<{ img: string; title: string; category: string } | null>(null);

    const photos = [
        { id: 1, img: IMAGES.HERO, title: "Campus View", category: "Campus" },
        { id: 2, img: IMAGES.ENGINEERING, title: "Engineering Building", category: "Facilities" },
        { id: 3, img: IMAGES.BUSINESS, title: "Business School", category: "Facilities" },
        { id: 4, img: IMAGES.ARTS, title: "Arts & Sciences", category: "Facilities" },
        { id: 5, img: IMAGES.HEALTH, title: "Health Sciences", category: "Facilities" },
        { id: 6, img: IMAGES.NEWS1, title: "Campus Research", category: "News" },
        { id: 7, img: IMAGES.NEWS2, title: "Student Activities", category: "News" },
        { id: 8, img: IMAGES.COMP_SCI, title: "Computer Science Lab", category: "Academics" },
        { id: 9, img: IMAGES.MBA, title: "MBA Program", category: "Academics" },
        { id: 10, img: IMAGES.BIO, title: "Biology Lab", category: "Academics" },
        { id: 11, img: IMAGES.FINE_ARTS, title: "Fine Arts Studio", category: "Facilities" },
        { id: 12, img: IMAGES.ENGINEERING, title: "Engineering Lab", category: "Facilities" },
        { id: 13, img: IMAGES.BUSINESS, title: "Business Lecture", category: "Academics" },
        { id: 14, img: IMAGES.ARTS, title: "Liberal Arts", category: "Academics" },
        { id: 15, img: IMAGES.HEALTH, title: "Health Center", category: "Facilities" },
        { id: 16, img: IMAGES.HERO, title: "Main Building", category: "Campus" },
        { id: 17, img: IMAGES.COMP_SCI, title: "Technology Hub", category: "Facilities" },
        { id: 18, img: IMAGES.MBA, title: "Executive Education", category: "Academics" },
        { id: 19, img: IMAGES.BIO, title: "Science Building", category: "Facilities" },
        { id: 20, img: IMAGES.FINE_ARTS, title: "Art Gallery", category: "Events" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-gradient-to-r from-primary to-secondary py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Campus Gallery
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Explore our vibrant campus life through these moments captured around campus.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="w-full mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            onClick={() => setSelectedImage(photo)}
                            className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gray-200 dark:bg-gray-700 ${(index + 1) % 3 === 0 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                                }`}
                        >
                            <img
                                src={photo.img}
                                alt={photo.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-2 py-1 bg-secondary rounded-md text-xs font-bold mb-2">
                                    {photo.category}
                                </span>
                                <h3 className="text-lg font-bold">{photo.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white text-4xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                    >
                        ×
                    </button>
                    <div className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-6 text-center">
                            <span className="inline-block px-3 py-1 bg-secondary rounded-md text-sm font-bold mb-2 text-white">
                                {selectedImage.category}
                            </span>
                            <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
