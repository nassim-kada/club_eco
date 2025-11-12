"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { getPostById, getSuggestedPosts } from '@/data/data';

const BlogPostPage = () => {
  const params = useParams();
  const postId = params.id as string;

  // Get current post and suggested posts from data.ts
  const post = getPostById(postId);
  const suggestedPosts = getSuggestedPosts(postId, 3);

  // Handle post not found
  if (!post) {
    return (
      <div className="bg-gradient-to-br from-green-50 via-teal-50 to-orange-50/30 min-h-screen">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-8xl mb-6">📄</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the article you're looking for.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] text-white font-bold"
            >
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 via-teal-50 to-orange-50/30 min-h-screen">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button 
          asChild 
          variant="ghost" 
          className="group text-[#2d5a3d] hover:text-[#1e5f5a] hover:bg-green-50"
        >
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Blog</span>
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] text-white font-semibold text-sm px-4 py-1">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5 sm:mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            {/* Author Info */}
            {post.author && (
              <>
                <div className="flex items-center gap-3">
                  <img 
                    src={post.authorImage || '/api/placeholder/100/100'} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#1e5f5a]"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">{post.authorRole}</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              </>
            )}

            {/* Date & Reading Time */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-2 border-gray-200 hover:border-[#1e5f5a] hover:bg-green-50"
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full border-2 border-gray-200 hover:border-[#c85a25] hover:bg-orange-50"
                aria-label="Bookmark article"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-lg font-semibold text-gray-900">Share this article</p>
              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  className="rounded-full border-2 border-gray-200 hover:border-[#1e5f5a] hover:bg-green-50"
                >
                  Twitter
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full border-2 border-gray-200 hover:border-[#1e5f5a] hover:bg-green-50"
                >
                  Facebook
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full border-2 border-gray-200 hover:border-[#1e5f5a] hover:bg-green-50"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Suggested Posts Section */}
      {suggestedPosts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                You Might Also Like
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Discover more stories and updates from our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {suggestedPosts.map((suggestedPost) => (
                <BlogCard key={suggestedPost.id} {...suggestedPost} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8 sm:mt-10">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] hover:from-[#1e5f5a] hover:to-[#2d8b84] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold px-6 py-4 sm:px-8 sm:py-6 rounded-xl text-sm sm:text-base"
              >
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;