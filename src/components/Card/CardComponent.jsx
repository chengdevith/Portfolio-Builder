import React from "react";
import { CardList } from "./helpers/CardList";

export default function CardComponent() {
  return (
    <section>
      <div className="max-w-screen-xl m-auto cardList grid xl:grid-cols-3 sm:grid-cols-2 gap-20">
        {CardList.map((card) => (
          <div key={card.id} className="relative cardItem group">
            <div className="border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-gray-200 overflow-hidden">
              <a href="#">
                <img
                  className="h-60 w-full rounded-t-lg bg-gray-200 transition-transform duration-300 group-hover:scale-110"
                  src={card.image}
                  alt={card.title}
                />
              </a>
              <div className="px-5 py-3">
                <a href="#">
                  <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h2>
                </a>
                <a href="#">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {card.categories}
                  </p>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-black/20 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
              <button className="w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-orange-500 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
                {/* <FontAwesomeIcon icon={faEye} /> */}
              </button>
              <button className="w-20 h-8 flex items-center justify-center bg-purple-500  hover:bg-orange-500 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
                {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
