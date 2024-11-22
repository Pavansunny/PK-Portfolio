import Button from '../shared/Button';
import SocialLinks from '../shared/SocialLinks';

export default function Hero() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-[#81B29A] text-white rounded-full text-sm">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C3639]">
                Hi, I'm <span className="text-[#E07A5F]">Pavan</span>
              </h1>
              {/* ... rest of content ... */}
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button>View Projects</Button>
                <Button variant="secondary">Contact Me</Button>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Image section remains the same */}
        </div>
      </div>
    </main>
  );
} 