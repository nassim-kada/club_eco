"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  image,
  featured = false 
}) => {
  return (
    <Link href={`/blog/${id}`} className="block">
      <Card className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 cursor-pointer ${
        featured ? 'border-[#c85a25]' : 'border-gray-100'
      }`}>
        {/* Image Section */}
        <div className="relative overflow-hidden h-44 sm:h-52 md:h-56">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2d5a3d]/20 via-[#1e5f5a]/20 to-[#c85a25]/20 flex items-center justify-center">
              <div className="text-5xl sm:text-6xl text-gray-300">📝</div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <Badge className="bg-white text-[#2d5a3d] hover:bg-white font-semibold shadow-lg text-xs sm:text-sm">
              {category}
            </Badge>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <Badge className="bg-gradient-to-r from-[#c85a25] to-[#d97638] text-white font-semibold shadow-lg text-xs sm:text-sm">
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-3 sm:pt-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1e5f5a] transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="pb-3 sm:pb-4 px-4 sm:px-6">
          <p className="text-sm sm:text-base text-gray-600 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-3 sm:pt-4 px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[#1e5f5a] group-hover:text-[#c85a25] transition-colors">
            <span className="font-semibold text-xs sm:text-sm">Read More</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;