"use client";
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Search, X, LogOut, Menu, FileText, BarChart3, Users } from 'lucide-react';

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Getting Started with Eco Zone Club', excerpt: 'Welcome to our community! Learn how to make the most of your membership...', author: 'Admin', date: '2024-11-10', status: 'Published', views: 245 },
    { id: 2, title: 'Upcoming Workshop: Innovation Summit', excerpt: 'Join us for an exciting workshop on innovation and entrepreneurship...', author: 'Admin', date: '2024-11-08', status: 'Published', views: 189 },
    { id: 3, title: 'Member Spotlight: Success Stories', excerpt: 'Hear from our members about their journey and achievements...', author: 'Admin', date: '2024-11-05', status: 'Draft', views: 0 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); 
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    status: 'Draft',
    author: 'Admin'
  });

  const openModal = (mode, blog = null) => {
    setModalMode(mode);
    if (blog) {
      setSelectedBlog(blog);
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content || '',
        status: blog.status,
        author: blog.author
      });
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        status: 'Draft',
        author: 'Admin'
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      status: 'Draft',
      author: 'Admin'
    });
  };

  const handleCreate = () => {
    // Your API call here
    const newBlog = {
      id: blogs.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0],
      views: 0
    };
    setBlogs([newBlog, ...blogs]);
    closeModal();
  };

  const handleUpdate = () => {
    // Your API call here
    setBlogs(blogs.map(blog => 
      blog.id === selectedBlog.id 
        ? { ...blog, ...formData }
        : blog
    ));
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      // Your API call here
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl sm:text-2xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a]">
                  EZC
                </span> Dashboard
              </h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-sm text-gray-600">Welcome, <span className="font-semibold text-gray-900">Admin</span></span>
              <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-30 overflow-y-auto`}>
          <nav className="p-4 space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#2d5a3d] to-[#1e5f5a] text-white font-semibold shadow-md">
              <FileText className="w-5 h-5" />
              <span>Blog Posts</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5" />
              <span>Members</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Posts</p>
                    <p className="text-3xl font-bold text-gray-900">{blogs.length}</p>
                  </div>
                  <div className="p-3 bg-[#2d5a3d]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#2d5a3d]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Published</p>
                    <p className="text-3xl font-bold text-gray-900">{blogs.filter(b => b.status === 'Published').length}</p>
                  </div>
                  <div className="p-3 bg-[#1e5f5a]/10 rounded-lg">
                    <Eye className="w-6 h-6 text-[#1e5f5a]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Drafts</p>
                    <p className="text-3xl font-bold text-gray-900">{blogs.filter(b => b.status === 'Draft').length}</p>
                  </div>
                  <div className="p-3 bg-[#c85a25]/10 rounded-lg">
                    <Edit2 className="w-6 h-6 text-[#c85a25]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Views</p>
                    <p className="text-3xl font-bold text-gray-900">{blogs.reduce((sum, b) => sum + b.views, 0)}</p>
                  </div>
                  <div className="p-3 bg-[#d97638]/10 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-[#d97638]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search blog posts..."
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d5a3d] focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Create Button */}
                <button
                  onClick={() => openModal('create')}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#c85a25] to-[#d97638] hover:from-[#d97638] hover:to-[#c85a25] text-white font-bold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>
            </div>

            {/* Blog Posts Table */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">Author</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">Views</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBlogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{blog.title}</p>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-1">{blog.excerpt}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 hidden lg:table-cell">{blog.author}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 hidden md:table-cell">{blog.date}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            blog.status === 'Published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {blog.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 hidden sm:table-cell">{blog.views}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => openModal('view', blog)}
                              className="p-2 text-[#1e5f5a] hover:bg-[#1e5f5a]/10 rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openModal('edit', blog)}
                              className="p-2 text-[#2d5a3d] hover:bg-[#2d5a3d]/10 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {modalMode === 'create' && 'Create New Post'}
                {modalMode === 'edit' && 'Edit Post'}
                {modalMode === 'view' && 'View Post'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {modalMode === 'view' ? (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedBlog.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                      <span>By {selectedBlog.author}</span>
                      <span>•</span>
                      <span>{selectedBlog.date}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        selectedBlog.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedBlog.status}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedBlog.excerpt}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d5a3d] focus:border-transparent transition-all duration-200"
                      placeholder="Enter post title..."
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Excerpt
                    </label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                      rows={3}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d5a3d] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Brief description..."
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Content
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      rows={8}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d5a3d] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Write your blog post content..."
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2d5a3d] focus:border-transparent transition-all duration-200"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                {modalMode === 'view' ? 'Close' : 'Cancel'}
              </button>
              {modalMode !== 'view' && (
                <button
                  onClick={modalMode === 'create' ? handleCreate : handleUpdate}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#c85a25] to-[#d97638] hover:from-[#d97638] hover:to-[#c85a25] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {modalMode === 'create' ? 'Create Post' : 'Update Post'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}