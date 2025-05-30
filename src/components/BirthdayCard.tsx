
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; // Import next/image
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PartyPopper, CakeSlice, Gift } from 'lucide-react';
import AnimatedBalloons from './AnimatedBalloons';
import AnimatedCandles from './AnimatedCandles';

// Define the type for button position
interface Position {
  top: string;
  left: string;
  transition: string;
}

export default function BirthdayCard() {
  const { toast } = useToast();
  const [buttonPosition, setButtonPosition] = useState<Position>({
    top: '50%', // Initial position
    left: '25%', // Initial position, adjusted to be left of center
    transition: 'top 0.2s ease, left 0.2s ease', // Smooth transition
  });
  const cardRef = useRef<HTMLDivElement>(null); // Ref for the card content area to constrain button movement
  const [showThankYouImage, setShowThankYouImage] = useState(false); // State to control image visibility

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      // Calculate random position within the bounds of the CardContent
      // Ensure it's within visible area, subtracting button approx width/height
      const maxX = cardRect.width - 150; // 150px approx button width
      const maxY = cardRect.height - 50; // 50px approx button height

      const newLeft = Math.random() * maxX;
      const newTop = Math.random() * maxY;

      setButtonPosition({
        top: `${newTop}px`,
        left: `${newLeft}px`,
        transition: 'top 0.2s ease, left 0.2s ease',
      });
    }
  };

  const handleSecondButtonClick = () => {
    toast({
      title: "🎉 Done! 🎉",
      description: "sent $5! Enjoy your treat! 😉",
      duration: 5000, // Keep toast longer
    });
    setShowThankYouImage(true); // Show the image and caption
  };

  // Prevent hydration mismatch for button position
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full max-w-2xl">
      {/* Animated Background Elements */}
      <AnimatedBalloons count={5} />
      <div className="absolute top-10 left-1/4 text-5xl text-yellow-500 animate-bounce delay-1">
         <Gift size={48}/>
      </div>
       <div className="absolute bottom-10 right-1/4 text-5xl text-pink-500 animate-bounce delay-3">
         <PartyPopper size={48}/>
      </div>


      <Card className="w-full text-center shadow-xl border-4 border-accent rounded-2xl overflow-visible z-10 bg-card">
        <CardHeader className="relative pt-12 pb-4">
           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <AnimatedCandles count={7} />
           </div>
          <h1 className="text-5xl font-bold text-primary drop-shadow-md mt-8 font-['Pacifico',_cursive]">
            Happy Birthday Naruto!
          </h1>
           <div className="absolute top-4 right-4"> <PartyPopper className="text-accent animate-pulse"/> </div>
            <div className="absolute top-4 left-4"> <CakeSlice className="text-pink-400 animate-pulse delay-2"/> </div>
        </CardHeader>
        <CardContent ref={cardRef} className="relative py-10 min-h-[300px] md:min-h-[400px]"> {/* Adjusted min-height for image */}
          <p className="text-xl font-semibold text-secondary-foreground mb-6">Party kab de rha hai?</p>

          {showThankYouImage ? (
            <div className="mt-6 flex flex-col items-center">
              <Image
                src="/imgscan.jpeg" 
                alt="Thank you image"
                width={300}
                height={425} 
                className="rounded-lg shadow-md object-contain"
                data-ai-hint="thank you photo" 
              />
              <p className="mt-4 text-xl font-semibold text-primary animate-pulse">
                Thankyou bro🥳🫂❤️
              </p>
            </div>
          ) : (
            <div className="relative h-[150px]"> {/* Container for buttons */}
              {isClient && (
                <Button
                  variant="outline"
                  className="absolute px-6 py-3 text-base rounded-lg shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105 border-primary text-primary"
                  style={{
                    top: buttonPosition.top,
                    left: buttonPosition.left,
                    transform: 'translate(-50%, -50%)', // Center button on the position
                    transition: buttonPosition.transition, // Apply transition
                    zIndex: 20, // Ensure it's above other elements
                  }}
                  onMouseEnter={handleMouseEnter}
                  // onClick={handleMouseEnter} // Optional: For touch devices
                >
                  When we meet
                </Button>
              )}

              <Button
                variant="default"
                className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-base rounded-lg shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105"
                style={{ zIndex: 10 }} // Ensure it's below the moving button if they overlap
                onClick={handleSecondButtonClick}
              >
                sending $5, get yourself something
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-8">
          <p className="text-muted-foreground text-sm">Wishing you a fantastic year ahead!</p>
        </CardFooter>
      </Card>
    </div>
  );
}

