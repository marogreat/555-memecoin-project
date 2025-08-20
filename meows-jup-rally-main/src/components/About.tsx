import { Card } from "@/components/ui/card";
import myVideo from "@/assets/my-video3.mp4"; // ✅ import video from assets

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            More Than Just a Meme
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            $555 isn't just a memecoin, it's a rallying cry: a blend of luck, culture, and pure internet energy.
            Together, the community drives the narrative, proving that memes aren't just jokes — they're the future of momentum.
          </p>
        </div>

        {/* Cards Section (3 cards instead of 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="cyber-border cyber-glow p-8 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mr-4">
                <span className="text-neon-green text-xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold">Energy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pure internet energy flows through our community. We're not just trading tokens,
              we're building a movement that represents the power of collective belief.
            </p>
          </Card>

          <Card className="cyber-border cyber-glow p-8 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mr-4">
                <span className="text-neon-green text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold">Culture</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Memes are the universal language. They transcend borders, unite communities,
              and create shared experiences that bond us together in the digital age.
            </p>
          </Card>

          <Card className="cyber-border cyber-glow p-8 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mr-4">
                <span className="text-neon-green text-xl">🍀</span>
              </div>
              <h3 className="text-2xl font-bold">Luck</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              555 represents fortune and alignment. In numerology, it signifies transformation and new beginnings.
              This is our moment to redefine what meme culture can achieve.
            </p>
          </Card>
        </div>

        {/* Video Section */}
        <div className="text-center">
          <Card className="cyber-border cyber-glow p-4 bg-card/30 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden cyber-border">
              <video
                src={myVideo}   // ✅ using imported video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Get ready for an immersive visual experience that captures the essence of the 555 movement
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
