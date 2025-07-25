import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoIntroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Ve cómo funciona</span>
            <br />
            <span className="text-foreground">en solo 2 minutos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre lo sencillo que es gestionar tus impuestos con nuestro servicio. 
            Un proceso completamente automatizado que te ahorra tiempo y quebraderos de cabeza.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="/api/placeholder/1200/675"
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {/* Placeholder para el video - Aquí irá tu video real */}
              <source src="/video-intro.mp4" type="video/mp4" />
              <source src="/video-intro.webm" type="video/webm" />
              Tu navegador no soporta el elemento video.
            </video>

            {/* Video Overlay Fallback cuando no hay video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Video Demo Próximamente</h3>
                <p className="text-lg opacity-90 max-w-md mx-auto">
                  Estamos preparando un video explicativo que te mostrará paso a paso cómo funciona nuestro servicio.
                </p>
              </div>
            </div>

            {/* Custom Video Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20 h-12 w-12"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMute}
                    className="text-white hover:bg-white/20 h-10 w-10"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20 h-10 w-10"
                >
                  <Maximize2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  variant="ghost"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Video Description */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Registro Rápido</h3>
              <p className="text-muted-foreground">Solo necesitas 2 minutos para empezar</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sube Documentos</h3>
              <p className="text-muted-foreground">Arrastra y suelta tus archivos fácilmente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Recibe Resultados</h3>
              <p className="text-muted-foreground">Tu asesor personal se encarga de todo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroSection;