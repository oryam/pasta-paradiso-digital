import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pastaVariety from "@/assets/pasta-variety.jpg";
import chefPasta from "@/assets/chef-pasta.jpg";

const PresentationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-pasta">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-tomato">Una</span>{" "}
            <span className="text-basil">Passione</span>{" "}
            <span className="text-paprika">Italiana</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Chaque pâte est une œuvre d'art, chaque sauce une symphonie de saveurs. 
            Laissez-vous transporter dans un voyage culinaire au cœur de l'Italie.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={pastaVariety} 
                alt="Variété de pâtes italiennes" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tomato/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-tomato mb-4">
              L'Art de la Dégustation
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Nos pâtes sont préparées quotidiennement avec des ingrédients d'exception 
              importés directement d'Italie. Chaque bouchée vous fait voyager dans les 
              ruelles de Rome, les collines de Toscane ou les côtes d'Amalfi.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-xl border border-border/50">
                <div className="text-2xl text-tomato mb-2">🍝</div>
                <h4 className="font-semibold text-basil">Pâtes Fraîches</h4>
                <p className="text-sm text-muted-foreground">Préparées chaque matin</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border/50">
                <div className="text-2xl text-paprika mb-2">🧀</div>
                <h4 className="font-semibold text-basil">Fromages Italiens</h4>
                <p className="text-sm text-muted-foreground">Sélection artisanale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-basil mb-4">
              Votre Création, Notre Passion
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Nous croyons que chaque personne a sa propre vision du plat parfait. 
              C'est pourquoi nous vous offrons la liberté de créer votre combinaison 
              unique parmi notre vaste sélection d'ingrédients authentiques.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-tomato text-mozzarella px-4 py-2 rounded-full font-medium">Personnalisation</span>
              <span className="bg-basil text-mozzarella px-4 py-2 rounded-full font-medium">Fraîcheur</span>
              <span className="bg-paprika text-mozzarella px-4 py-2 rounded-full font-medium">Authenticité</span>
            </div>
            <Button 
              size="lg"
              className="bg-basil hover:bg-basil/90 text-mozzarella font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Commencer ma Création
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="relative group order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={chefPasta} 
                alt="Chef préparant des pâtes" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-basil/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;