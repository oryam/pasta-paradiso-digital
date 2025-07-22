import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ingredients from "@/assets/ingredients.jpg";

const CustomizationSection = () => {
  const pastaTypes = [
    { name: "Spaghetti", description: "Classiques et élégants", icon: "🍝" },
    { name: "Penne", description: "Parfaites pour les sauces", icon: "🍜" },
    { name: "Fettuccine", description: "Larges et savoureuses", icon: "🍝" },
    { name: "Ravioli", description: "Farcies avec amour", icon: "🥟" },
  ];

  const sauces = [
    { name: "Pomodoro", description: "Tomate fraîche et basilic", color: "bg-tomato" },
    { name: "Pesto", description: "Basilic, pignons et parmesan", color: "bg-basil" },
    { name: "Carbonara", description: "Crémeuse et traditionnelle", color: "bg-cream" },
    { name: "Arrabbiata", description: "Épicée et passionnée", color: "bg-paprika" },
  ];

  const cheeses = [
    { name: "Parmigiano Reggiano", description: "Le roi des fromages", icon: "🧀" },
    { name: "Mozzarella", description: "Douce et crémeuse", icon: "🧀" },
    { name: "Gorgonzola", description: "Caractère et personnalité", icon: "🧀" },
    { name: "Pecorino Romano", description: "Intense et authentique", icon: "🧀" },
  ];

  const sizes = [
    { name: "Piccola", description: "Portion découverte", price: "12€" },
    { name: "Media", description: "Portion équilibrée", price: "15€" },
    { name: "Grande", description: "Portion généreuse", price: "18€" },
    { name: "Famiglia", description: "À partager", price: "25€" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-basil">Composez</span>{" "}
            <span className="text-tomato">Votre</span>{" "}
            <span className="text-paprika">Plat</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            4 étapes simples pour créer votre plat de pâtes italien parfait. 
            Choisissez parmi nos ingrédients premium et laissez-nous faire le reste.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={ingredients} 
            alt="Ingrédients frais pour pâtes" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tomato/20 via-basil/20 to-paprika/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-3xl md:text-5xl font-bold text-mozzarella text-center">
              Ingrédients Authentiques d'Italie
            </h3>
          </div>
        </div>

        {/* Customization Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Pasta Types */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-tomato text-center">
              1. Choisissez vos Pâtes
            </h3>
            <div className="space-y-4">
              {pastaTypes.map((pasta, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-tomato">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{pasta.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{pasta.name}</h4>
                      <p className="text-sm text-muted-foreground">{pasta.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sauces */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-basil text-center">
              2. Sélectionnez la Sauce
            </h3>
            <div className="space-y-4">
              {sauces.map((sauce, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-basil">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full ${sauce.color} border-2 border-white shadow-sm`}></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{sauce.name}</h4>
                      <p className="text-sm text-muted-foreground">{sauce.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Cheeses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-paprika text-center">
              3. Ajoutez le Fromage
            </h3>
            <div className="space-y-4">
              {cheeses.map((cheese, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-paprika">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{cheese.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{cheese.name}</h4>
                      <p className="text-sm text-muted-foreground">{cheese.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-parmesan text-center">
              4. Choisissez la Taille
            </h3>
            <div className="space-y-4">
              {sizes.map((size, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-parmesan">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{size.name}</h4>
                      <p className="text-sm text-muted-foreground">{size.description}</p>
                    </div>
                    <span className="text-lg font-bold text-parmesan">{size.price}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-italian rounded-2xl">
          <h3 className="text-3xl font-bold text-mozzarella mb-4">
            Prêt à Créer votre Chef-d'œuvre ?
          </h3>
          <p className="text-lg text-mozzarella/90 mb-6 max-w-2xl mx-auto">
            Venez nous rendre visite et laissez nos chefs transformer vos choix en une expérience culinaire inoubliable.
          </p>
          <Button 
            size="lg"
            className="bg-mozzarella text-tomato hover:bg-mozzarella/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Nous Rendre Visite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;