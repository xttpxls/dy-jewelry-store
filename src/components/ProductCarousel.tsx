import React from 'react';
import { Heart, ChevronLeft, ChevronRight, ShoppingBag, ChevronRight as ChevronRightSmall } from 'lucide-react';

interface Product {
  id: string;
  image: string;
  price: string;
  oldPrice?: string;
  title: string;
  discount?: string;
  label?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  buttonText?: string;
  bottomLinkText?: string;
  products: Product[];
  bgImage?: string;
  bgColor?: string;
  darkText?: boolean;
}

export default function ProductCarousel({ title, subtitle, buttonText, bottomLinkText, products, bgImage, bgColor = 'bg-transparent', darkText = true }: Props) {
  return (
    <div className="px-2 lg:px-4 py-2">
      <section className={`relative py-16 ${bgColor} rounded-[24px] lg:rounded-[32px] overflow-hidden`}>
        {bgImage && (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px] lg:rounded-[32px]">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          </div>
        )}
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className={`text-3xl md:text-[32px] font-sans font-medium mb-4 ${darkText ? 'text-[#0f172a]' : 'text-white'}`}>{title}</h2>
          {subtitle && <p className={`text-lg ${darkText ? 'text-slate-700' : 'text-white/90'} mb-6`}>{subtitle}</p>}
          {buttonText && (
            <button className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${darkText ? 'bg-white/50 hover:bg-white text-slate-900 border border-slate-300/50' : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30'}`}>
              {buttonText}
            </button>
          )}
        </div>

        <div className="relative group flex items-center justify-center">
          <button className="hidden md:flex absolute left-0 lg:-left-12 z-20 w-10 h-10 bg-white/50 hover:bg-white rounded-full items-center justify-center shadow-sm transition-colors">
            <ChevronLeft size={20} className="text-slate-600" strokeWidth={1.5} />
          </button>
          
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 w-full -mx-4 px-4 lg:mx-0 lg:px-0">
            {products.map(product => (
              <div key={product.id} className="snap-start shrink-0 w-[280px] bg-white rounded-none relative group/card cursor-pointer flex flex-col pb-4 transition-all">
                
                {/* Image Section */}
                <div className="relative h-[320px] w-full mb-5 bg-[#f5f6f8] overflow-hidden flex items-center justify-center">
                  <button className="absolute top-4 right-4 z-10 text-[#c8cacd] hover:text-pink-500 transition-colors lg:opacity-0 group-hover/card:opacity-100">
                    <Heart size={22} strokeWidth={1.5} />
                  </button>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col px-1 flex-grow">
                  {(product.label || product.discount) && (
                    <span className="text-[12px] text-[#8e9096] mb-1.5 font-medium">
                      {product.label || product.discount}
                    </span>
                  )}
                  
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-[20px] font-bold text-[#191919] tracking-tight">{product.price}</span>
                    {product.oldPrice && <span className="text-[14px] text-[#8e9096] line-through">{product.oldPrice}</span>}
                  </div>
                  
                  <p className="text-[14px] text-[#55575c] leading-[1.4] line-clamp-2">{product.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex absolute right-0 lg:-right-12 z-20 w-10 h-10 bg-white/50 hover:bg-white rounded-full items-center justify-center shadow-sm transition-colors">
            <ChevronRight size={20} className="text-slate-600" strokeWidth={1.5} />
          </button>
        </div>

        {bottomLinkText && (
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-1 text-sm text-slate-800 hover:text-black transition-colors">
              Смотреть <span className="font-bold uppercase">{bottomLinkText.replace('Смотреть ', '')}</span>
              <ChevronRightSmall size={16} className="text-slate-500" />
            </button>
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
