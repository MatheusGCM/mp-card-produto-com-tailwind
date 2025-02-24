import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productImage from "./assets/image-card.png";
import { StarRating } from "./components/star-rating";

export function App() {
  return (
    <div className="flex justify-center items-center md:h-screen">
      <div className="flex flex-col w-[564px] overflow-hidden md:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] md:rounded-[20px]">
        <img src={productImage} alt="Imagem do produto" />
        <div className="px-10 py-5 md:py-10">
          <h1 className="text-3xl font-bold text-black md:text-[42px]">
            Nike air Max 90
          </h1>
          <p className="mt-2 font-medium text-sm text-black my-6 md:text-xl">
            Eleve seu estilo com o clássico reinventado. Conforto supremo
            encontra design inovador
          </p>

          <StarRating />

          <div className="flex flex-col my-7 md:flex-row md:justify-between md:items-center">
            <span className="font-bold text-[#21A9FB] text-4xl">R$ 899,00</span>
            <div className="space-x-2 my-4 md:hidden">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-[#9A9A9A] text-sm md:text-xl"
              />
              <span className="text-[#9A9A9A] font-medium md:text-xl">
                Frete grátis para todo o Brasil
              </span>
            </div>
            <button
              type="button"
              className="text-xl font-semibold px-8 py-3 bg-gradient-to-r from-[#138CFF] to-purple-400 text-white rounded-full cursor-pointer hover:opacity-90 duration-200"
            >
              Comprar agora
            </button>
          </div>
          <div className="hidden md:space-x-4 md:block">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-[#9A9A9A] text-sm md:text-xl"
            />
            <span className="text-[#9A9A9A] font-medium md:text-xl">
              Frete grátis para todo o Brasil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
