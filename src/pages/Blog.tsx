import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { t } = useTranslation();

  const posts = [
    {
      title: t('blog_post1_title'),
      excerpt: t('blog_post1_excerpt'),
      date: '2024-03-15',
      readTime: t('blog_post1_readTime'),
      category: t('blog_post1_category'),
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: t('blog_post2_title'),
      excerpt: t('blog_post2_excerpt'),
      date: '2024-03-10',
      readTime: t('blog_post2_readTime'),
      category: t('blog_post2_category'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: t('blog_post3_title'),
      excerpt: t('blog_post3_excerpt'),
      date: '2024-03-05',
      readTime: t('blog_post3_readTime'),
      category: t('blog_post3_category'),
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: t('blog_post4_title'),
      excerpt: t('blog_post4_excerpt'),
      date: '2024-02-28',
      readTime: t('blog_post4_readTime'),
      category: t('blog_post4_category'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              {t('blog_title')}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('blog_subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      {t('read_more')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white">
                  {t('stay_updated')}
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-100">
                  {t('subscribe_message')}
                </p>
                <form className="mt-8 sm:flex justify-center">
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                    placeholder={t('enter_email')}
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:mt-0 sm:ml-3 sm:w-auto"
                  >
                    {t('subscribe')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;