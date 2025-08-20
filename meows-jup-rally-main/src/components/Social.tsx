import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "Twitter",
      handle: "@555onjup",
      url: "https://x.com/555onjup",
      icon: "𝕏",
      description: "Follow us for the latest updates and community discussions"
    },
    {
      name: "Telegram",
      handle: "Triple Five Token",
      url: "https://t.me/triplefivetoken",
      icon: "✈️",
      description: "Join our community chat and connect with fellow holders"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connect with the $555 community across social platforms. 
            Be part of the movement that's redefining meme culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {socialLinks.map((social) => (
            <Card key={social.name} className="cyber-border cyber-glow p-8 bg-card/50 backdrop-blur-sm hover:cyber-glow-intense transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{social.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                <p className="text-neon-green font-mono text-lg mb-4">{social.handle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {social.description}
                </p>
                <Button 
                  variant="neon" 
                  className="w-full animate-glow"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="text-center">
          <Card className="cyber-border cyber-glow p-8 bg-card/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 neon-text">Community Power</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold neon-text mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Believers</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-text mb-2">555</div>
                <div className="text-sm text-muted-foreground">Energy Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-text mb-2">🚀</div>
                <div className="text-sm text-muted-foreground">To the Moon</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Social;