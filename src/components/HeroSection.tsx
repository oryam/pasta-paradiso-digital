import { Button } from "@/components/ui/button";
import homeVideo from "@/assets/home.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={homeVideo}
          autoPlay
          muted
          loop
          playsInline
          disablepictureinpicture
          title="Italian Pasta Video Background"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-italian bg-clip-text text-transparent">
            Pasta
          </span>{" "}
          <span className="text-mozzarella">Perfetta</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-mozzarella/90 font-medium animate-fade-in [animation-delay:0.2s]">
          L'authentique expérience italienne dans votre assiette
        </p>
        
        <p className="text-lg mb-12 text-mozzarella/80 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
          Découvrez notre bar à pâtes où chaque plat raconte l'histoire de l'Italie. 
          Créez votre propre combinaison parfaite avec nos ingrédients frais et authentiques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
          <Button 
            size="lg" 
            className="bg-tomato hover:bg-tomato/90 text-mozzarella font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Découvrir nos Pâtes
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-mozzarella text-tomato hover:bg-mozzarella hover:text-tomato font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Personnaliser mon Plat
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-mozzarella rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mozzarella rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;