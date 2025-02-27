import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import globalPresence from "../assets/data/globalPresence";

export default function GlobalDetails() {
  const { id = "" } = useParams();
  const region = globalPresence.find((release) => release.id === id);
  const [orientations, setOrientations] = useState({});

  console.log(orientations);

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setOrientations((prev) => ({
      ...prev,
      [index]: naturalWidth > naturalHeight ? "horizontal" : "vertical",
    }));
  };
  return (
    <div>
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src={
            region?.image ||
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          }
          alt="Global Engagement"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{region?.region}</h1>
            <p className="text-xl opacity-90">{region?.excerpt}</p>
          </div>
        </div>
      </div>

      <div>
        {region?.events?.map((event, index) => (
          <div key={index} className="container mx-auto px-6 py-20 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-6">{event?.title}</h1>
              <p className="opacity-90 text-xl">{event?.description}</p>
            </div>
            <div className="inline-flex flex-wrap justify-start gap-4">
              {event?.images?.map((image, i) => (
                <img
                  // className="w-full h-full object-contain object-center"
                  className="h-96 object-cover w-full lg:w-auto lg:max-w-[30rem]"
                  src={image}
                  alt={event?.title}
                  title={orientations?.["" + index + i]}
                  onLoad={(e) => handleImageLoad("" + index + i, e)}
                />
              ))}
            </div>
            {event?.link && (
              <div>
                <a
                  href={event?.link}
                  target="_blank"
                  className="text-blue-600 text-xl hover:text-blue-700 flex items-center"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
