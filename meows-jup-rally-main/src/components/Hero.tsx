import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black neon-text cyber-glow-intense animate-glow">
              555
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px bg-neon-green flex-1 max-w-32"></div>
              <span className="text-neon-green font-orbitron text-sm tracking-wider">
                CA - D71e1ZZWrXArB77ersVtBLVRJ7kbVzBjZfgGm7sZjups
              </span>
              <div className="h-px bg-neon-green flex-1 max-w-32"></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            The Future of Meme Culture
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Born out of the visionary idea of Jupiter Exchange's shepherd, Meow, and the longevity plan for $JUP, 
            555 is a mirror of the same vision — fueled by community alignment and unstoppable social movement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="neon" size="lg" className="animate-glow">
              Join the Movement
            </Button>
            <Button variant="cyber" size="lg">
              Watch Video
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="cyber-border cyber-glow p-6 bg-card/50 backdrop-blur-sm">
              <div className="text-2xl font-bold neon-text mb-2">$555</div>
              <div className="text-muted-foreground text-sm">Token Symbol</div>
            </Card>
            <Card className="cyber-border cyber-glow p-6 bg-card/50 backdrop-blur-sm">
              <div className="text-2xl font-bold neon-text mb-2">Community</div>
              <div className="text-muted-foreground text-sm">Driven</div>
            </Card>
            <Card className="cyber-border cyber-glow p-6 bg-card/50 backdrop-blur-sm">
              <div className="text-2xl font-bold neon-text mb-2">Jupiter</div>
              <div className="text-muted-foreground text-sm">Ecosystem</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-neon-green to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
