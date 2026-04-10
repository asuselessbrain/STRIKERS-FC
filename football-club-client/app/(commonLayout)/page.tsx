"use client";
import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, ShoppingCart, Badge } from "lucide-react";
import { ImageWithFallback } from "@/components/utils/ImageWithFallback";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 34,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Record-Breaking Victory Against Rivals",
      category: "Match Report",
      date: "April 5, 2026",
      image:
        "https://images.unsplash.com/photo-1721886537583-ea3a257adb9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMG1hdGNoJTIwYWN0aW9uJTIwZ29hbHxlbnwxfHx8fDE3NzU0NzAwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "New Captain Announced for 2026 Season",
      category: "Team News",
      date: "April 4, 2026",
      image:
        "https://images.unsplash.com/photo-1745944756454-938dcb6e62ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBtZXJjaGFuZGlzZSUyMHNob3B8ZW58MXx8fHwxNzc1NDcwMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Youth Academy Produces Three New Stars",
      category: "Academy",
      date: "April 3, 2026",
      image:
        "https://images.unsplash.com/photo-1760177379323-2b22f8d41707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTQ3MDAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Stadium Expansion Plans Revealed",
      category: "Club News",
      date: "April 2, 2026",
      image:
        "https://images.unsplash.com/photo-1767884162073-b0e3741aad63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzUzNzI3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const newsSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollNews = (direction: "left" | "right") => {
    if (!newsSliderRef.current) {
      return;
    }

    const offset = newsSliderRef.current.clientWidth * 0.9;
    newsSliderRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  const standings = [
    { position: 1, team: "Strikers FC", played: 32, won: 24, drawn: 5, lost: 3, points: 77, form: ["W", "W", "W", "D", "W"] },
    { position: 2, team: "City United", played: 32, won: 23, drawn: 6, lost: 3, points: 75, form: ["W", "W", "D", "W", "W"] },
    { position: 3, team: "Royal Athletic", played: 32, won: 21, drawn: 7, lost: 4, points: 70, form: ["D", "W", "W", "W", "L"] },
    { position: 4, team: "Metro FC", played: 32, won: 19, drawn: 8, lost: 5, points: 65, form: ["W", "D", "W", "W", "D"] },
    { position: 5, team: "Harbor Town", played: 32, won: 18, drawn: 9, lost: 5, points: 63, form: ["D", "W", "D", "W", "W"] },
  ];

  const products = [
    {
      id: 1,
      name: "Home Jersey 2026",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1745944756454-938dcb6e62ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBqZXJzZXklMjBtZXJjaGFuZGlzZSUyMHNob3B8ZW58MXx8fHwxNzc1NDcwMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Training Kit",
      price: "$64.99",
      image: "https://images.unsplash.com/photo-1760177379323-2b22f8d41707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTQ3MDAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      badge: null,
    },
    {
      id: 3,
      name: "Club Scarf",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1641520617951-1938ce460576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNjYXJmJTIwZmFuJTIwYWNjZXNzb3J5fGVufDF8fHx8MTc3NTQ3MDAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      badge: null,
    },
    {
      id: 4,
      name: "Pro Boots",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1768696082133-024fedbdbc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGJvb3RzJTIwc29jY2VyJTIwY2xlYXRzfGVufDF8fHx8MTc3NTQ3MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "New",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-150 lg:h-175 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767884162073-b0e3741aad63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzUzNzI3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Stadium"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0e1a] via-[#0a0e1a]/70 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#0cfe00] text-black hover:bg-[#0cfe00]/90">
              NEXT MATCH
            </Badge>
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-7xl lg:text-8xl text-white mb-4">
              STRIKERS FC VS<br />CITY UNITED
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-['Montserrat']">Saturday, April 12, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-['Montserrat']">19:45 GMT</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-['Montserrat']">Strikers Stadium</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8 max-w-md">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="bg-[#0f1420]/80 backdrop-blur rounded-lg p-4 text-center">
                  <div className="font-['Bebas_Neue'] text-3xl md:text-4xl text-[#0cfe00]">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#0cfe00] text-black hover:bg-[#0cfe00]/90 font-['Montserrat'] font-semibold"
            >
              Buy Tickets
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 lg:py-24 bg-[#0f1420]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white mb-2">
                LATEST NEWS
              </h2>
              <div className="h-1 w-20 bg-[#0cfe00]" />
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => scrollNews("left")}
                className="border-white/20 text-white hover:bg-white/10"
                aria-label="Previous news"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => scrollNews("right")}
                className="border-white/20 text-white hover:bg-white/10"
                aria-label="Next news"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Link href="/news">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View All
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div
            ref={newsSliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
          >
            {newsItems.map((item) => (
              <div key={item.id} className="shrink-0 basis-full snap-start sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-white/10 bg-[#0a0e1a] transition-transform hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded bg-[#0cfe00] px-3 py-1 text-xs font-semibold text-black">
                      {item.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <p className="mb-2 font-['Montserrat'] text-sm text-[#8892a6]">{item.date}</p>
                    <h3 className="mb-4 line-clamp-2 font-['Montserrat'] text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <Button variant="link" className="p-0 text-[#0cfe00] hover:text-[#0cfe00]/80">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* League Standings Section */}
      <section className="py-16 lg:py-24 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white mb-2">
              LEAGUE STANDINGS
            </h2>
            <div className="h-1 w-20 bg-[#0cfe00]" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="font-['Montserrat'] text-left py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider">
                    Pos
                  </th>
                  <th className="font-['Montserrat'] text-left py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider">
                    Team
                  </th>
                  <th className="font-['Montserrat'] text-center py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider hidden md:table-cell">
                    P
                  </th>
                  <th className="font-['Montserrat'] text-center py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider hidden md:table-cell">
                    W
                  </th>
                  <th className="font-['Montserrat'] text-center py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider hidden md:table-cell">
                    D
                  </th>
                  <th className="font-['Montserrat'] text-center py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider hidden md:table-cell">
                    L
                  </th>
                  <th className="font-['Montserrat'] text-center py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider">
                    Pts
                  </th>
                  <th className="font-['Montserrat'] text-right py-4 px-4 text-sm font-semibold text-[#8892a6] uppercase tracking-wider hidden lg:table-cell">
                    Form
                  </th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr
                    key={team.position}
                    className={`border-b border-white/10 transition-colors hover:bg-[#0f1420] ${
                      team.team === "Strikers FC" ? "bg-[#0cfe00]/5" : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div
                        className={`font-['Bebas_Neue'] text-xl ${
                          team.team === "Strikers FC" ? "text-[#0cfe00]" : "text-white"
                        }`}
                      >
                        {team.position}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div
                        className={`font-['Montserrat'] font-semibold ${
                          team.team === "Strikers FC" ? "text-[#0cfe00]" : "text-white"
                        }`}
                      >
                        {team.team}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-white hidden md:table-cell">
                      {team.played}
                    </td>
                    <td className="py-4 px-4 text-center text-white hidden md:table-cell">
                      {team.won}
                    </td>
                    <td className="py-4 px-4 text-center text-white hidden md:table-cell">
                      {team.drawn}
                    </td>
                    <td className="py-4 px-4 text-center text-white hidden md:table-cell">
                      {team.lost}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="font-['Bebas_Neue'] text-xl text-[#0cfe00]">
                        {team.points}
                      </div>
                    </td>
                    <td className="py-4 px-4 hidden lg:table-cell">
                      <div className="flex justify-end gap-1">
                        {team.form.map((result, idx) => (
                          <div
                            key={idx}
                            className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                              result === "W"
                                ? "bg-[#0cfe00] text-black"
                                : result === "D"
                                ? "bg-[#ffd700] text-black"
                                : "bg-[#d4183d] text-white"
                            }`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Featured Merchandise Section */}
      <section className="py-16 lg:py-24 bg-[#0f1420]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white mb-2">
                FEATURED MERCH
              </h2>
              <div className="h-1 w-20 bg-[#0cfe00]" />
            </div>
            <Link href="/shop">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Shop All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-white/10 bg-[#0a0e1a] transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-[#ffd700] text-black">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-['Bebas_Neue'] text-2xl text-[#0cfe00]">
                      {product.price}
                    </span>
                    <Button
                      size="icon"
                      className="bg-[#0cfe00] text-black hover:bg-[#0cfe00]/90"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
