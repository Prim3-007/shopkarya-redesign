import { useState, useMemo, useEffect } from 'react';
import { useSearch } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';

/**
 * Diamonds Product Listing Page (PLP)
 * Design Philosophy: Technical depth with value-focused UX
 * - Filtering sidebar with 4Cs specifications
 * - Product grid with value badges
 * - Responsive layout with proper spacing
 * - Category filtering based on URL query parameters
 */

// Mock product data with categories
const mockProducts = [
  {
    id: '1',
    name: 'Round Brilliant Diamond - 1.5ct H VS1',
    price: 4250,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/vqOoUdDSNF3zl2kNngohCM-img-1_1771188416000_na1fn_cHJvZHVjdC1kaWFtb25kLXJvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L3ZxT29VZERTTkYzemwya05uZ29oQ00taW1nLTFfMTc3MTE4ODQxNjAwMF9uYTFmbl9jSEp2WkhWamRDMWthV0Z0YjI1a0xYSnZkVzVrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eHfa6MEI1LxhGeM0-Y1EjCVw4TPDbMHV6G2HsT3pzGXV3QW~fLfTpDunxxh5Ryt5-m-5jRgKGbgqAIz6IufJeMrS7Dn174SiQBUkN93PWNMJPPhVNKVxpNrMgIjIyrrLZiqTCWehecthFMgvGYNWL2tOaRryliW4ERj5YSZRlx7bJ5O0OYkn6x83oFzyNp-3AErArTaCz1uEzzM62so3S-OV7xCh34BG9t5-olfUomWkF5713Vghp~3m6Wy5YctZaPFMCSho1Z7eiQjRTQ~A65eiHwSwg3w2i~UStxz9-pfMyodWdT0bn8uajXx5K5EFYQp63LrRPVcb6MeVkuuwIg__',
    badge: 'Best Value',
    badgeColor: 'accent' as const,
    rating: 5,
    reviews: 24,
    category: 'engagement-rings',
  },
  {
    id: '2',
    name: 'Diamond Drop Earrings - 1.2ct G VS2',
    price: 3150,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/SVGEDy1WCiI4yXPVRQPvx9-img-2_1771189640000_na1fn_cHJvZHVjdC1lYXJyaW5ncy0y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L1NWR0VEeTFXQ2lJNHlYUFZSUVB2eDktaW1nLTJfMTc3MTE4OTY0MDAwMF9uYTFmbl9jSEp2WkhWamRDMWxZWEp5YVc1bmN5MHkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fx2b0x1cdAnt9uOz8Qm4lkbvGVi50PZNKMztN9Rfv~Ixx3m~VF9xtWixjIk283ZdnId2yo5WrlcTiqcVkoRMzHShSwGsT82HTLG3~4tiqqh0KWk~l94~QbiYmKaq5XDTzb8RDLkrPcnHiwaqgbIJ1AVyTgDQUwvzpBcAdHtxA2PISLgQJkVeTMhgHWYz-xb26R5sZJDuHMX0~n46aVzRROfugp94dl-kDB~Vjq2snaj7NaPpmGnYtBTFxSwdPmrCpTdUqvBcR-WGs3wp4j6Uf1vhpYt-QoD5sLbEL0y12JRrN43ZtWM72sPkdIyOD4wJq44wuJHaEMeCtgELmmlMaA__',
    badge: 'Top Pick',
    badgeColor: 'accent' as const,
    rating: 4.5,
    reviews: 18,
    category: 'earrings',
  },
  {
    id: '3',
    name: 'Diamond Pendant Necklace - 1.8ct F SI1',
    price: 5200,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/SVGEDy1WCiI4yXPVRQPvx9-img-3_1771189638000_na1fn_cHJvZHVjdC1wZW5kYW50LTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L1NWR0VEeTFXQ2lJNHlYUFZSUVB2eDktaW1nLTNfMTc3MTE4OTYzODAwMF9uYTFmbl9jSEp2WkhWamRDMXdaVzVrWVc1MExURS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nIsLKPH9yrbZpvGQS51kNsBc0b-VmVJhd8ss-cND5Y5dmhQhehBf8vt8PeOkLCTxHHazOigKKDoHS4y~bjRPVgfVrGAmbeBzljBdTaCjaeQUN3iuYHXmlzb7p4i7mMt0cdvxROIeZ3GJaAztIr8Tgn4pSa0RZkmnXP9wRJtAEWWZpMQISHKXQWgLQiXD7xV9UydT5WSDu83lPtZxQd2r6pIogHejzEKH4ye4BN8o-AXe-W8Y~I61wTK-yskquzJvnF7fXKIhxvLxx2kh8qNVqkoV8dwqq8~QShHgcujKda76KtfklMPKSAlGNq8OMEqi5b~5~HE3siZaviISHrO1FQ__',
    rating: 5,
    reviews: 32,
    category: 'pendants',
  },
  {
    id: '4',
    name: 'Diamond Tennis Bracelet - 1.3ct E VVS2',
    price: 4800,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/SVGEDy1WCiI4yXPVRQPvx9-img-5_1771189639000_na1fn_cHJvZHVjdC1icmFjZWxldC0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L1NWR0VEeTFXQ2lJNHlYUFZSUVB2eDktaW1nLTVfMTc3MTE4OTYzOTAwMF9uYTFmbl9jSEp2WkhWamRDMWljbUZqWld4bGRDMHgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZR-Zu5LWgBhPxChgDBOVgShvYK9Q7~rQ5Kt-q7FLIGmSLbayvF3UInmG0BBbarH-p-ge6nfnO7ZWSZNBe25-PNVo6JRYC~dCFbdED9P3SBimgUIAG8EB7yjHhf~pKMXE62siuODZD71KVwz1B7RcOlwUWkzP-LwRRBX27pOQ0GX~wryQRXDgtZ2WqxZD1eaaxqhc7bOiY1~2vfntGN93QtQl3YoS98tDUl-fdtyPa9RK2TK-7qW0Bnahr9lVxsvTz3KnEqP7J0YF6XGfPo7UiI6oIFitkT4dwxzGSJ96btDaEsL7edtjXwp3k1SFBb01QAmgvP3aspYKgIIUDUJ~5Q__',
    badge: 'Premium',
    badgeColor: 'secondary' as const,
    rating: 5,
    reviews: 28,
    category: 'bracelets',
  },
  {
    id: '5',
    name: 'Pear Shape Diamond - 1.1ct H SI2',
    price: 2800,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/n3IsfTAGVWjRZfJZv01v4b-img-2_1771188449000_na1fn_cHJvZHVjdC1kaWFtb25kLXBlYXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L24zSXNmVEFHVldqUlpmSlp2MDF2NGItaW1nLTJfMTc3MTE4ODQ0OTAwMF9uYTFmbl9jSEp2WkhWamRDMWthV0Z0YjI1a0xYQmxZWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HQCYyopWSG82MpcBzwZnZrnuogQYvTp2NAhHmEEQlGonEikh2mSb3gqn9x8TEJOXmvmFjeugTnJSPnrc5~p5V5dXAacxcOSWhW177xzYSFneeJ2jjmE-6RkeDLx0xK4qHsyDR6xtvYy8KZTF1xsNHf0Bqra~JAilaxdarU1Ov8xQioAny0426LwYWPJh4nEH9fxZAhpxcjMdNJxVEJWwq5~fat3BLQnORnsbOz4RbqjLnf5USoyMHTZ6zLNePe8v3-O2jdX4JaGvX9AVu2SZNTZaApI8CJ3FSJPqMlak~Li2npEtM~Yw3j5ozuqOEybDk0tKfy95CjW5qtZ179DtxA__',
    rating: 4.5,
    reviews: 15,
    category: 'engagement-rings',
  },
  {
    id: '6',
    name: 'Diamond Stud Earrings - 1.6ct G VS1',
    price: 4600,
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/SVGEDy1WCiI4yXPVRQPvx9-img-1_1771189639000_na1fn_cHJvZHVjdC1lYXJyaW5ncy0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L1NWR0VEeTFXQ2lJNHlYUFZSUVB2eDktaW1nLTFfMTc3MTE4OTYzOTAwMF9uYTFmbl9jSEp2WkhWamRDMWxZWEp5YVc1bmN5MHgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nZHy1ymp1chsaaSZ7zkXEuYhu1wJuv5QKW8VDaysxKH~Bu2qN4caXgExRKCTyHe9AF1wzrKlzDZiNpcYd8LSzF6-wal9c88~d0b1btUsFW6Wmqf5FtEy0vSIpI6CY4Cf-NJX~8sNO089sQPc9PQDIIm8AyG1MgeWL6hQkEB7rKNhIRk~j8gp5XQYDnq7bq2bPsPAhbT9GvOE9Tkke3qzs0v-VFAvLpJA83GqmcWz9lV6rINLq015cV8H4wNeX0IraIa2HHa~87fw7jcs31phW1-OjBiFJiJKoo5gVDwTQC4xJ-q49af6A7MfMiBgmMglWMibKkbvbsh9aVGXtK5cjQ__',
    rating: 5,
    reviews: 22,
    category: 'earrings',
  }
];

export default function Diamonds() {
  const searchString = useSearch();
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(searchString);
    setCategory(searchParams.get('category'));
  }, [searchString]);

  // Filter products based on category
  const displayProducts = useMemo(() => {
    if (!category) return mockProducts;
    return mockProducts.filter((product) => product.category === category);
  }, [category]);

  const getCategoryTitle = () => {
    switch (category) {
      case 'engagement-rings':
        return 'Engagement Rings';
      case 'earrings':
        return 'Earrings';
      case 'pendants':
        return 'Pendants';
      case 'bracelets':
        return 'Bracelets';
      default:
        return 'Loose Diamonds';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-secondary/30 border-b border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-lg text-foreground/60">
            Browse our collection of certified diamonds with detailed specifications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <FilterSidebar onFiltersChange={(filters) => {
              // Filter logic would go here
              console.log('Filters changed:', filters);
            }} />
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {/* Results Header */}
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-foreground/60">
                Showing <span className="font-semibold text-foreground">{displayProducts.length}</span> diamonds
              </p>
              <select className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground hover:border-accent transition-colors duration-200">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Carat: Low to High</option>
                <option>Carat: High to Low</option>
              </select>
            </motion.div>

            {/* Product Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {displayProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
                  badgeColor={product.badgeColor}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors duration-200">
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    page === 1
                      ? 'bg-accent text-accent-foreground'
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
