"use client";
import React, { useState } from 'react';
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar } from "lucide-react";
import { MOCK_POSTS } from "@/data/data";

const CATEGORIES = ['All', 'Community', 'Events', 'Members', 'Education'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search and category
  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-green-50 via-teal-50 to-orange-50/30 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1e5f5a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#2d5a3d]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6 animate-fade-in-up">
              <Calendar className="w-4 h-4 text-[#c85a25]" />
              <span className="text-sm font-semibold text-gray-700">Latest Updates & Stories</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight animate-fade-in-up">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a]">
                Stories
              </span>
              {' '}&{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c85a25] to-[#d97638]">
                Events
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              Stay connected with the latest news, events, and inspiring stories from the Eco Zone Club community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="text"
              placeholder="Search articles, events, and stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-[#1e5f5a] rounded-xl shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] text-white shadow-md hover:shadow-lg'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-[#1e5f5a] hover:text-[#1e5f5a] hover:bg-green-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Showing <span className="font-bold text-[#2d5a3d]">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to Share Your Story?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We'd love to feature your experiences, projects, and achievements. Get in touch with us today!
            </p>
            <Button 
              size="lg"
              className="bg-white text-[#2d5a3d] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold px-8 py-6 rounded-xl"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;