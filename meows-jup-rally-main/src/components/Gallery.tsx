import { Card } from "@/components/ui/card";
import image1 from "@/assets/image555.jpg";
import image2 from "@/assets/image2555.jpg";

const Gallery = () => {
  const images = [
    {
      src: image1,
      alt: "555 Cyberpunk Aesthetic",
      title: "Digital Vision"
    },
    {
      src: image2,
      alt: "555 Future Art",
      title: "Neon Dreams"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Visual Identity
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore the cyberpunk aesthetic that defines the $555 movement. 
            Where digital art meets meme culture in perfect harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <Card key={index} className="cyber-border cyber-glow p-4 bg-card/30 backdrop-blur-sm hover:cyber-glow-intense transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold neon-text mb-2">{image.title}</h3>
                  <div className="h-px bg-neon-green w-16 animate-pulse"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Image Showcase */}
        <div className="mt-16 text-center">
          <Card className="cyber-border cyber-glow p-8 bg-card/20 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="relative">
              <img 
                src={image1} 
                alt="555 Featured Art" 
                className="w-full h-48 object-cover rounded-lg cyber-glow-intense"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg cyber-border">
                  <h3 className="text-2xl font-bold neon-text mb-2">The Future is Now</h3>
                  <p className="text-muted-foreground">Where memes meet technology</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;