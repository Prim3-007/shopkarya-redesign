import { Link } from 'wouter';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopByShape from '@/components/ShopByShape';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design Philosophy: Minimalist luxury with fluid motion
 * - Header with navigation
 * - Hero section with background image and CTA
 * - Shop by Shape section with diamond icons
 * - Featured products with real images
 * - Footer with contact and links
 */
export default function Home() {
  const featuredCollections = [
    {
      id: 1,
      name: 'Engagement Rings',
      description: 'Timeless solitaire and halo designs',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/TllRWHhabMpyZvBfuj7CNu-img-1_1771183399000_na1fn_ZmVhdHVyZWQtZW5nYWdlbWVudC1yaW5ncw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L1RsbFJXSGhhYk1weVp2QmZ1ajdDTnUtaW1nLTFfMTc3MTE4MzM5OTAwMF9uYTFmbl9abVZoZEhWeVpXUXRaVzVuWVdkbGJXVnVkQzF5YVc1bmN3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kBmtZAD2JaPkIkWuGZZJbdVXnQQJyGUAipgj6~mUyoaO4gU72QoVaT1e~7pPxQRhWIqCYFT-XxUsKAj1ChC5CU8xiRYt1NaU2DR5C1LB9OMvA3c29Bz4m5mcBMYN03C5RRfRZeQQCkJAL6V-xUWJuaoMfcAKHXUKMytbK45fiDI31W8R9cCdrRod58I7d7XWgrgww8D8bWnbTG5-Jok3cT~yN7LddvhJgRjRGfOn-E-AXz3bAdFu-uMu0IZvChWQsDae7rkYB0yXeda~Vnr6uWtjBxwPsi-3R9-mUWuQivtIHEGe8dMBxp9IGj0kpkkgvLpw1qsc83Hg~46LZQYjCg__'
    },
    {
      id: 2,
      name: 'Earrings',
      description: 'Elegant studs and drop earrings',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/e8gIFHIOtQeXmm5gsXdqVY-img-1_1771183424000_na1fn_ZmVhdHVyZWQtZWFycmluZ3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L2U4Z0lGSElPdFFlWG1tNWdzWGRxVlktaW1nLTFfMTc3MTE4MzQyNDAwMF9uYTFmbl9abVZoZEhWeVpXUXRaV0Z5Y21sdVozTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cX1n7WZdHvJvaXkWJ6JLQ~bOlCc6CGJraargpo-IzB9W01SWv2jsZLM5gafIlzEYS~J1U4faEqxfFOZZVkZm9IxoZMAAD9Fjuve~wK0ZJDW1riRzAQE6P1495qeE2lhXOT4~EU8RrPZ5XWnzamlylAZ1CirVCYvWPD114-b4WuJY54nzUixtYpFyfYpFFe~CccBlDQ0MM4nJVKdlgR1RZeVBEL9JUQhY5g7pt5uOnwAXdfaYUcCtXca2qQO5kS7sGrlo6pDpJRGJgdj4Pi40oLdcDUTxlvEkukdH~R6GpkdcY0szhJp1NkQ9J1b~et8cvcumqzD2cwVNNu0m2nA42A__'
    },
    {
      id: 3,
      name: 'Pendants',
      description: 'Exquisite diamond necklaces',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/ApOKQMyNDLlLxO8EgvTwjg-img-1_1771183447000_na1fn_ZmVhdHVyZWQtcGVuZGFudHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L0FwT0tRTXlORExsTHhPOEVndlR3amctaW1nLTFfMTc3MTE4MzQ0NzAwMF9uYTFmbl9abVZoZEhWeVpXUXRjR1Z1WkdGdWRITS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=r7ErS5LL0yoTJhdymd2PbzAHl07Xgtmbq2jLUi1mhEiqe9zloJ0~GEXULs3fGX~psdHEBcP1RgGciD8-Vyj1bWw2Qv-tx-UCBacAmC4D1yvB1gW-5hmuawVeZP1IEHzfvQdktgQPe195Eab8fSCtXiCglyS5Pbx2ed4una~r~k-KBNWlz39jc0KIxfw4Kjv0hvRvd7KHrJfwd~VKgqKc1QyaRdWYmJwTcM9BpCfGA9IPLt-NDcAPr-~ytLB-ttixt8YoUmCUw~GZIZnJ2812IugXNrDXRB9hSKIwase~2cVqe02Y85i2g1~5OMe3H-OhbtPkA8IoROAUDQLx7fF2GA__'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ShopByShape />

      {/* Featured Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Handpicked selections from our premium jewelry collections
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => {
              const categorySlug = collection.name.toLowerCase().replace(' ', '-');
              return (
                <Link key={collection.id} href={`/diamonds?category=${categorySlug}`}>
                  <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
